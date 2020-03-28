class SocketNotificationController {
    constructor(clients, config) {
        this.clients = clients;
        this.config = config;
    }

    init(notificationModule) {
        if (!notificationModule) {
            throw new Error('Error while initializing, notifcation module required');
        }
        if (!this.isInitialized) {
            this.notificationModule = notificationModule;
            this.isInitialized = true;
        }
    }

    isActive() {
        return this.isInitialized;
    }

    notifyUsers(affectedUsers) {
        if (!this.isActive()) {
            throw new Error('Feature not initialized');
        }
        const notificationsToStore = [];
        affectedUsers.forEach((affected) => {
            const { userId } = affected;
            const client = this.clients[userId];
            if (!client) {
                notificationsToStore.push(affected);
                return;
            }
            const message = {
                ...affected,
                type: 'contact',
            };
            client.send(JSON.stringify(message));
        });
        return this.notificationModule.storeNotifications(notificationsToStore);
    }

    async getUserNotifications(message) {
        if (!this.isActive()) {
            throw new Error('Feature not initialized');
        }
        const { userId } = message;
        const data = await this.notificationModule.getNotifications(userId);
        return {
            type: 'notifications',
            data,
        };
    }
}

module.exports = SocketNotificationController;
