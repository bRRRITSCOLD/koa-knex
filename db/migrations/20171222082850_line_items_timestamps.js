exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('line_items_timestamps', (tbl) => {
    tbl.increments('id').primary();
    tbl.integer('line_item_id').notNullable().references('line_items.id').unsigned().onDelete('cascade');
    tbl.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    tbl.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('line_items_timestamps');
};
