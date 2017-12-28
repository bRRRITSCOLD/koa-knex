exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('products', (tbl) =>{
    tbl.increments('id').primary();
    tbl.string('name').notNullable().unique();
    tbl.float('cost');
    tbl.float('price').notNullable();
    tbl.string('category').notNullable().defaultTo('miscellaneous');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('products');
};
