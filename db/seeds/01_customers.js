const customers = require('./data/customers/customers.js');

exports.seed = function(knex, Promise) {
  return knex('customers').del()
    .then(function () {
      return knex('customers').insert(customers);
    });
};
