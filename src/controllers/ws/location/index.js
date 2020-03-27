class SocketLocationController {
    constructor(config) {
        this.config = config;
    }

    init(locationModule) {
        if (!locationModule) {
            throw new Error('Error while initializing, location module required');
        }
        if (!this.isInitialized) {
            this.locationModule = locationModule;
            this.isInitialized = true;
        }
    }

    isActive() {
        return this.isInitialized;
    }

    trackLocation(message) {
        if (!this.isActive()) {
            throw new Error('Feature not initialized');
        }
        const { userId, data } = message;
        return this.locationModule.trackLocation(userId, data);
    }
}

module.exports = SocketLocationController;
