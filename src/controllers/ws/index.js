const LocationController = require('./location');

class SocketControllers {
    constructor(config) {
        this.controllers = {
            locationController: new LocationController(config && config.complexity),
        };
    }

    async init(modules) {
        return {
            location: this.controllers.locationController.init(modules.locationModule),
        };
    }
}

module.exports = SocketControllers;
