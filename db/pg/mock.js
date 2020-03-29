/* eslint-disable */
const { Pool } = require('pg');
const config = require('../../config');
const { users, locations, notifications } = require('./fixtures');

const pool = new Pool(config && config.storage && config.storage.pg && config.storage.pg.pool);

function setupUsers() {
    const insertPart = 'INSERT INTO users(id, first_name, last_name, threat)';
    const valuesPart = `VALUES ${users.map((el, index) => {
        const offset = (index * 4) + 1;
        let valueStr = `($${offset}, $${offset + 1}, $${offset + 2}, $${offset + 3})`;
        if (index !== 0) {
            valueStr = '\n'.concat(valueStr);
        }
        return valueStr;
    })}`;
    const query = `${insertPart} ${valuesPart}`;
    const valuesArr = users.reduce(
        (store, _) => { store.push(...[_.id, _.first_name, _.last_name, _.threat]); return store; },
        [],
    );
    return pool.query(query, valuesArr);
}

function setupLocations() {
    const insertPart = 'INSERT INTO location(user_id, lat, long, timestamp)';
    const valuesPart = `VALUES ${locations.map((el, index) => {
        const offset = (index * 4) + 1;
        let valueStr = `($${offset}, $${offset + 1}, $${offset + 2}, $${offset + 3})`;
        if (index !== 0) {
            valueStr = '\n'.concat(valueStr);
        }
        return valueStr;
    })}`;
    const query = `${insertPart} ${valuesPart}`;
    const valuesArr = locations.reduce(
        (store, _) => { store.push(...[_.user_id, _.lat, _.long, _.timestamp]); return store; },
        [],
    );
    return pool.query(query, valuesArr);
}

function setupNotifications() {
    const insertPart = 'INSERT INTO notifications(user_id, slat, slong, lat, long, threat, timestamp)';
    const valuesPart = `VALUES ${notifications.map((el, index) => {
        const offset = (index * 7) + 1;
        let valueStr = `($${offset}, $${offset + 1}, $${offset + 2}, $${offset + 3}, $${offset + 4}, $${offset + 5}, $${offset + 6})`;
        if (index !== 0) {
            valueStr = '\n'.concat(valueStr);
        }
        return valueStr;
    })}`;
    const query = `${insertPart} ${valuesPart}`;
    const valuesArr = notifications.reduce(
        (store, _) => { store.push(...[_.user_id, _.slat, _.slong, _.lat, _.long, _.threat, _.timestamp]); return store; },
        [],
    );
    return pool.query(query, valuesArr);
}

module.exports = async () => {
    await setupUsers();
    await setupLocations();
    await setupNotifications();
};
