const BaseLocationStorage = require('../../base/location');

const trackText = 'insert into location(userId, lat, long, timestamp) values($1, $2, $3, $4)';

class PGLocationStorage extends BaseLocationStorage {
    constructor(pool) {
        super(pool);
        this.pool = pool;
    }

    trackLocation(userId, locData) {
        return this.pool.query(trackText, userId, locData.lat, locData.long, locData.timestamp);
    }
}

module.exports = PGLocationStorage;
