const featherKnex = require('feathers-knex');

const db = require('../../database/db_connection');

//  Make the route and set services of featherKnex to the this route
module.exports = (app) => {
  const options = { name: 'items', Model: db };
  app.use('/items', featherKnex(options));
};
