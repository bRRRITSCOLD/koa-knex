exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('invoices', (tbl) =>{
    tbl.increments('id').primary();
    tbl.integer('customer_id').notNullable().references('customers.id').unsigned().onDelete('cascade');
    tbl.float('line_items_total').notNullable().defaultTo(0.00);
    tbl.float('additional_fees').notNullable().defaultTo(0.00);
    tbl.float('tax_rate').notNullable().defaultTo(.07);
    tbl.float('sub_total').notNullable().defaultTo(0.00);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('invoices');
};
