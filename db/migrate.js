const pg = require('./pg');

const storage = process.argv[2];
async function migrate() {
    switch (storage) {
        case 'pg': {
            return pg();
        }
        default: {
            throw new Error('Expected argument passed');
        }
    }
}

migrate().then(() => process.exit(0));
