const LocationModule = require('./location');

class Modules {
    constructor(config) {
        this.modules = {
            location: new LocationModule(config && config.complexity),
        };
    }

    async init(storage) {
        this.modules.location.init(storage);
    }
}

module.exports = Modules;
