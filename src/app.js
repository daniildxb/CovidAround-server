const Modules = require('./modules');

class Application {
    constructor(config, controllers, storage) {
        this.config = config;
        this.modules = new Modules(config.modules);
        this.controllers = controllers;
        this.storage = storage;
    }

    async init() {
        await this.initStorage();
        await this.initModules();
        await this.initControllers();
    }

    async initStorage() {
        return this.storage.init();
    }

    async initModules() {
        return this.modules.init(this.storage);
    }

    async initControllers() {
        return this.controllers.init(this.modules);
    }
}

module.exports = Application;
