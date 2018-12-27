const connection = require('../db_connection');

const items = (async () => {
  const exists = await connection.schema.hasTable('items');
  // drop table if exits
  if (!exists) {
    // Create items table
    await connection.schema.createTable('items', (table) => {
      table.increments('id');
      table.string('name');
      table.text('description');
    });
  }
})();

module.exports = items;
