const { Pool } = require('pg');
const config = require('../../config');

const pool = new Pool(config && config.storage && config.storage.pg && config.storage.pg.pool);


module.exports = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id varchar(16),
            first_name varchar(32),
            last_name varchar(32),
            PRIMARY KEY (user_id)
        );
    `);
    await pool.query(`
        CREATE TABLE IF NOT EXISTS location (
            user_id varchar(16),
            lat varchar(16),
            long varchar(16),
            timestamp integer,
            PRIMARY KEY (user_id,timestamp),
            FOREIGN KEY (user_id) REFERENCES users (id)
        );
    `);
};
