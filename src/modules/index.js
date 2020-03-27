const LocationModule = require('./location');

class Modules {
    constructor(config) {
        this.location = new LocationModule(config && config.complexity);
    }

    init(storage) {
        return this.location.init(storage.location);
    }
}

module.exports = Modules;
