const { Pool } = require('pg');
const config = require('../../config');
const mock = require('./mock');

const pool = new Pool(config && config.storage && config.storage.pg && config.storage.pg.pool);

async function createTables() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id varchar(16),
            first_name varchar(32),
            last_name varchar(32),
            threat integer default 0,
            PRIMARY KEY (id)
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
    await pool.query(`
            CREATE TABLE IF NOT EXISTS notifications (
                id serial,
                user_id varchar(16),
                slat varchar(16),
                slong varchar(16),
                lat varchar(16),
                long varchar(16),
                threat integer,
                timestamp integer,
                received boolean DEFAULT false,
                PRIMARY KEY (id),
                FOREIGN KEY (user_id) REFERENCES users (id)
            );
    `);
}

module.exports = async () => {
    await createTables();
    await mock();
};
