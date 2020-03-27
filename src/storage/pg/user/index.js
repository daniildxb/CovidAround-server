const BaseUserStorage = require('../../base/user');

class PGUserStorage extends BaseUserStorage {
    constructor(pool) {
        super(pool);
        this.pool = pool;
    }

    register(userId, userData) {
        const query = 'insert into users(id, first_name, last_name) values($1, $2, $3)';
        return this.pool.query(query, [userId, userData.firstName, userData.lastName]);
    }

    infect(userId) {
        return this.pool.query('update users set infected=TRUE where user_id=$1', [userId]);
    }
}

module.exports = PGUserStorage;
