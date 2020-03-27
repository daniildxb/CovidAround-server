class UserModule {
    constructor(locationModule, config) {
        this.config = config;
        this.locationModule = locationModule;
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

    register(userId, userData) {
        return this.storage.register(userId, userData);
    }

    async infect(userId, userData) {
        const infectedTimestamp = userData.timestamp || Date.now();
        await this.storage.infect(userId);
        const users = await this.locationModule.findUsersWhoContacted(userId, infectedTimestamp);
        return this.notificationModule.sendNotifications(users);
    }
}

module.exports = UserModule;
