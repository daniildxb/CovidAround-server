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
                switch (message.type) {
                    case 'location': {
                        that.location.trackLocation(message);
                        client.send('ack');
                        break;
                    }
                    default: {
                        client.send('invalid message type');
                    }
                }
            });
        });
    }
}

module.exports = SocketControllers;
