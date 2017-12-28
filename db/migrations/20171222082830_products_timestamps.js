exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('products_timestamps', (tbl) => {
    tbl.increments('id').primary();
    tbl.integer('product_id').notNullable().references('products.id').unsigned().onDelete('cascade');
    tbl.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    tbl.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('products_timestamps');
};
