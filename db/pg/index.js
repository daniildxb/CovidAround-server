const { Pool } = require('pg');
const config = require('../../config');

const pool = new Pool(config && config.storage && config.storage.pg && config.storage.pg.pool);


module.exports = () => pool.query(`
        CREATE TABLE IF NOT EXISTS location (
            user_id varchar(16),
            lat varchar(16),
            long varchar(16),
            timestamp integer,
            PRIMARY KEY (user_id,timestamp)
        );
`);
