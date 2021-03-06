class LocationModule {
    constructor(config) {
        this.config = config;
    }

    init(storage) {
        if (!storage) {
            throw new Error('Error while initializing, storage required');
        }
        if (!this.isInitialized) {
            this.storage = storage;
            this.isInitialized = true;
        }
    }

    trackLocation(userId, locationData) {
        return this.storage.trackLocation(userId, locationData);
    }

    findUsersWhoContacted(userId, timestamp) {
        return this.storage.findUsersWhoContacted(userId, timestamp);
    }
}

module.exports = LocationModule;
