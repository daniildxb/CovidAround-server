const LocationController = require('./location');

class SocketControllers {
    constructor(wss, config) {
        this.location = new LocationController(config && config.complexity);
        this.setUpRouting(wss);
    }

    async init(modules) {
        return {
            location: this.location.init(modules.location),
        };
    }

    setUpRouting(wss) {
        const that = this;
        wss.on('connection', (client) => {
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
                        return client.send('ack');
                    }
                    default: {
                        return client.send('invalid message type');
                    }
                }
            });
        });
    }
}

module.exports = SocketControllers;
