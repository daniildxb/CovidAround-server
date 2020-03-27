const BaseUserStorage = require('../../base/user');

const trackText = 'insert into users(id, first_name, last_name) values($1, $2, $3)';

class PGUserStorage extends BaseUserStorage {
    constructor(pool) {
        super(pool);
        this.pool = pool;
    }

    register(userId, userData) {
        return this.pool.query(trackText, [userId, userData.firstName, userData.lastName]);
    }
}

module.exports = PGUserStorage;
