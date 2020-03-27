const { Pool } = require('pg');

const BaseStorage = require('../base/index');
const LocationStorage = require('./location');

class PGStorages extends BaseStorage {
    constructor(config) {
        super(config);
        this.config = config;
        this.pool = new Pool(config && config.pool);
        this.location = new LocationStorage(this.pool);
        this.pool.on('error', (err, client) => client.end());
        this.initPromise = new Promise((resolve) => {
            this.pool.on('connect', resolve());
        });
    }

    init() {
        return this.initPromise;
    }
}

module.exports = PGStorages;
