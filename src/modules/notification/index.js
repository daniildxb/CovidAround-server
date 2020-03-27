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

    sendNotifications(notificationsData) {
        const userId = { notificationData: notificationsData };
        return this.storage.addNotification(userId, notificationsData);
    }
}

module.exports = NotificationModule;
