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
}

module.exports = LocationModule;
