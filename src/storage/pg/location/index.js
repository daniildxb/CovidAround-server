const BaseLocationStorage = require('../../base/location');

class PGLocationStorage extends BaseLocationStorage {
    constructor(pool) {
        super(pool);
        this.pool = pool;
    }

    trackLocation(userId, locData) {
        const query = 'insert into location(user_id, lat, long, timestamp) values($1, $2, $3, $4)';
        return this.pool.query(query, [userId, locData.lat, locData.long, locData.timestamp]);
    }

    findUsersWhoContacted(userId, timestamp) {
        const query = '';
        return this.pool.query(query, [userId, timestamp]);
    }
}

module.exports = PGLocationStorage;
