exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('invoices_timestamps', (tbl) => {
    tbl.increments('id').primary();
    tbl.integer('invoice_id').notNullable().references('invoices.id').unsigned().onDelete('cascade');
    tbl.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    tbl.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('invoices_timestamps');
};
