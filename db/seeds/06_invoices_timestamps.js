const invoicesTimestamps = require('./data/invoices/invoices_timestamps.js');

exports.seed = function(knex, Promise) {
  return knex('invoices_timestamps').del()
    .then(function () {
      return knex('invoices_timestamps').insert(invoicesTimestamps);
    });
};
