const BaseNotificationStorage = require('../../base/notification');

class PGNotificationStorage extends BaseNotificationStorage {
    constructor(pool) {
        super(pool);
        this.pool = pool;
    }

    addNotifications(notifications) {
        const insertPart = 'insert into notifications(user_id, lat, long, threat, timestamp)';
        const valuesPart = `values ${notifications.map((el, index) => {
            const offset = (index * 5) + 1;
            let valueStr = `($${offset}, $${offset + 1}, $${offset + 2}, $${offset + 3}, $${offset + 4})`;
            if (index !== 0) {
                valueStr = '\n'.concat(valueStr);
            }
            if (index !== notifications.length) {
                valueStr = valueStr.concat(',');
            }
            return valueStr;
        })}`;
        const query = `${insertPart} ${valuesPart}`;
        const valuesArr = notifications.reduce(
            (store, _) => store.push(...[_.userId, _.lat, _.long, _.threat, _.timestamp]),
            [],
        );
        return this.pool.query(query, valuesArr);
    }

    removeNotification(userId, notificationId) {
        const query = 'DELETE FROM notifications WHERE id = $1 AND user_id = $2';
        return this.pool(query, [notificationId, userId]);
    }

    getNewNotificationsByUser(userId) {
        const query = 'SELECT * FROM notifications user_id = $1 AND received=false';
        return this.pool(query, [userId]);
    }
}

module.exports = PGNotificationStorage;
