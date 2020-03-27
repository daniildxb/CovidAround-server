const LocationModule = require('./location');
const UserModule = require('./user');
const NotificationModule = require('./notification');

class Modules {
    constructor(config) {
        this.location = new LocationModule(config && config.location);
        this.user = new UserModule(this.location, config && config.user);
        this.notification = new NotificationModule(config && config.notification);
    }

    init(storage) {
        return this.location.init(storage.location);
    }
}

module.exports = Modules;
