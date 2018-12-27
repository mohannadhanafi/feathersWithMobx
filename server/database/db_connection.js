const knex = require('knex');
require('env2')('./config.env');

// get database variables from env file
const {
  DB_USER,
  DB_NAME,
  DB_PASSWORD,
} = process.env;

// Make the connection for database
const db = knex({
  client: 'mysql',
  connection: {
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASSWORD,
  },
  searchPath: ['knex', 'public'],
  pool: { min: 0, max: 7 },
});

module.exports = db;
