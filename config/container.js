module.exports = {
    storage: {
        pg: {
            pool: {
                host: 'pg_container',
                user: 'socket',
                database: 'socket',
                password: 'socketpass',
                connectionTimeoutMillis: 10000,
            },
        },
    },
};
