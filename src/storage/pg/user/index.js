const BaseUserStorage = require('../../base/user');

class PGUserStorage extends BaseUserStorage {
    constructor(pool) {
        super(pool);
        this.pool = pool;
    }

    register(userId, userData) {
        const query = 'INSERT INTO users(id, first_name, last_name) VALUES($1, $2, $3)';
        return this.pool.query(query, [userId, userData.firstName, userData.lastName]);
    }

    infect(userId, threat = 2) {
        return this.pool.query('UPDATE users SET threat=$2 WHERE user_id=$1', [userId, threat]);
    }
}

module.exports = PGUserStorage;
