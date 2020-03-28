const LocationController = require('./location');
const UserController = require('./user');
const NotificationController = require('./notification');

class SocketControllers {
    constructor(wss, config) {
        this.wss = wss;
        this.clients = {};
        this.setUpRouting();
        this.location = new LocationController(config && config.complexity);
        this.user = new UserController(config && config.complexity);
        this.notification = new NotificationController(this.clients, config && config.notification);
    }

    async init(modules) {
        if (!modules) {
            throw new Error('Error while initializing, modules are required');
        }
        if (!this.isInitialized) {
            this.isInitialized = true;
            return Promise.all([
                this.location.init(modules.location),
                this.user.init(modules.user),
                this.notification.init(modules.notification),
            ]);
        }
        return Promise.resolve();
    }

    isActive() {
        return this.isInitialized;
    }

    setUpRouting() {
        const that = this;
        this.wss.on('connection', (client) => {
            if (!this.isActive()) {
                client.send('Feature not initialized');
                client.close();
            }
            client.on('message', async (message) => {
                let parsedMessage;
                try {
                    parsedMessage = JSON.parse(message);
                    if (!parsedMessage.userId) {
                        client.send('userId is required');
                        return client.close();
                    }
                    that.clients[message.userId] = client;
                } catch (err) {
                    return client.send('invalid message format');
                }
                switch (parsedMessage.type) {
                    case 'location': {
                        that.location.trackLocation(parsedMessage);
                        break;
                    }
                    case 'register': {
                        that.user.register(parsedMessage);
                        break;
                    }
                    case 'infect': {
                        const affectedUsers = await that.user.infect(parsedMessage);
                        that.notification.notifyUsers(affectedUsers);
                        break;
                    }
                    case 'notifications': {
                        const notifications = await that.notification.getUserNotifications(parsedMessage);
                        client.send(JSON.stringify(notifications));
                        break;
                    }
                    default: {
                        return client.send('invalid message type');
                    }
                }
                return client.send('ack');
            });
        });
    }
}

module.exports = SocketControllers;
