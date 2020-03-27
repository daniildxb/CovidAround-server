/* eslint-disable */
const BaseNotificationStorage = require('../../base/notification');

class PGNotificationStorage extends BaseNotificationStorage {
    constructor(pool) {
        super(pool);
        this.pool = pool;
    }

    addNotifications(notifications) {

    }

    removeNotification(userId, notificationId) {

    }
}

module.exports = PGNotificationStorage;
