const localConfig = require('./local');
const containerConfig = require('./container');

let config;

if (process.env.IN_CONTAINER === 'true') {
    config = containerConfig;
} else {
    config = localConfig;
}

module.exports = config;
