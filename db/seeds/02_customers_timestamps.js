const customersTimestamps = require('./data/customers/customers_timestamps.js');

exports.seed = function(knex, Promise) {
  return knex('customers_timestamps').del()
    .then(function () {
      return knex('customers_timestamps').insert(customersTimestamps);
    });
};
