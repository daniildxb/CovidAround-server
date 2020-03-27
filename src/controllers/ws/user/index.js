class SocketUserController {
    constructor(config) {
        this.config = config;
    }

    init(userModule) {
        if (!userModule) {
            throw new Error('Error while initializing, user module required');
        }
        if (!this.isInitialized) {
            this.userModule = userModule;
            this.isInitialized = true;
        }
    }

    isActive() {
        return this.isInitialized;
    }

    register(message) {
        if (!this.isActive()) {
            throw new Error('Feature not initialized');
        }
        const { userId, data } = message;
        return this.userModule.register(userId, data);
    }
}

module.exports = SocketUserController;
