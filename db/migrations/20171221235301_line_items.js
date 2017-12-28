exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('line_items', (tbl) =>{
    tbl.increments('id').primary();
    tbl.integer('invoice_id').references('invoices.id').unsigned().onDelete('cascade');
    tbl.integer('product_id').references('products.id').unsigned().onDelete('cascade');
    tbl.float('quantity').notNullable();
    tbl.float('discount').notNullable();
    tbl.float('total').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('line_items');
};
