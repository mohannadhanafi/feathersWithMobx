const items = require('./items/services');

module.exports = (app) => {
  app.configure(items);
};
