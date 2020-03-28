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
        return Promise.all([
            this.location.init(storage.location),
            this.user.init(storage.user),
            this.notification.init(storage.notification),
        ]);
    }
}

module.exports = Modules;
