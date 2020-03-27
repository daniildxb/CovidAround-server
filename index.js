require('dotenv').config();
const WebSocket = require('ws');
const config = require('./config');
const Application = require('./src/app');
const WSControllers = require('./src/controllers/ws');

const wss = new WebSocket.Server({
    port: process.env.port || 8080,
});

const controllers = new WSControllers(wss, config.controllers);

const app = new Application(config, controllers);
app.init();
