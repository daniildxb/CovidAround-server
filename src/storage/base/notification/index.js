class BaseNotificationStorage {
    addNotifications() {
        throw new Error('Not implemented');
    }

    removeNotification() {
        throw new Error('Not implemented');
    }
}

module.exports = BaseNotificationStorage;
