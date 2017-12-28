const invoices = require('./data/invoices/invoices.js');

exports.seed = function(knex, Promise) {
  return knex('invoices').del()
    .then(function () {
      return knex('invoices').insert(invoices);
    });
};
