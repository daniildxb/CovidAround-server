class UserModule {
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

    register(userId, userData) {
        return this.storage.register(userId, userData);
    }
}

module.exports = UserModule;
