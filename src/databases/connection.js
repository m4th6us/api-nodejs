var knex = require('knex')({
    client: 'sqlite',
    connection: {
        filename: './dev.sqlite3'
    },
    migrations: {
        directory: './migrations'
    }
});

module.exports = knex;
