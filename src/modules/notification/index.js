class NotificationModule {
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

    storeNotifications(notificationsData) {
        return this.storage.addNotifications(notificationsData);
    }

    getNotifications(userId) {
        return this.storage.getNewNotificationsByUser(userId);
    }
}

module.exports = NotificationModule;
