const LocationController = require('./location');
const UserController = require('./user');

class SocketControllers {
    constructor(wss, config) {
        this.location = new LocationController(config && config.complexity);
        this.user = new UserController(config && config.complexity);
        this.wss = wss;
        this.setUpRouting();
    }

    async init(modules) {
        return {
            location: this.location.init(modules.location),
        };
    }

    setUpRouting() {
        const that = this;
        this.wss.on('connection', (client) => {
            client.on('message', (message) => {
                let parsedMessage;
                try {
                    parsedMessage = JSON.parse(message);
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
                        that.user.infect(parsedMessage);
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
