exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('customers_timestamps', (tbl) => {
    tbl.increments('id').primary();
    tbl.integer('customer_id').notNullable().references('customers.id').unsigned().onDelete('cascade');
    tbl.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    tbl.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('customers_timestamps');
};
