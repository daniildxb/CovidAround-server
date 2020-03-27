const PGStorage = require('./pg');

class StorageManager {
    constructor(config) {
        this.pgStorage = new PGStorage(config && config.pg);
    }

    getStorage() {
        return this.pgStorage;
    }
}

module.exports = new StorageManager();
