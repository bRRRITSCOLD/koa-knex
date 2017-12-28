exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('customers', (tbl) => {
    tbl.increments('id').primary();
    tbl.string('first_name').notNullable();
    tbl.string('last_name').notNullable();
    tbl.string('email').notNullable().unique();
    tbl.string('address');
    tbl.string('phone_number').notNullable();
    tbl.boolean('email_promotion_optin').defaultTo(false);
  })
};

// table.integer('user_id').references('user.id').unsigned().onDelete('cascade');

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('customers');
};
