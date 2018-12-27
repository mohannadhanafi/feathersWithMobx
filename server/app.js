const express = require('@feathersjs/express');
const feathers = require('@feathersjs/feathers');
const { connection } = require('./database/models');
const services = require('./services');

// Run the server
const app = express(feathers())
  .set('port', 5000)
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .configure(express.rest())
  .configure(connection)
  .configure(services)
  .use(express.errorHandler());


module.exports = app;
