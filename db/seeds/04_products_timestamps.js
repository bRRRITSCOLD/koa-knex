const productsTimestamps = require('./data/products/products_timestamps.js');

exports.seed = function(knex, Promise) {
  return knex('products_timestamps').del()
    .then(function () {
      return knex('products_timestamps').insert(productsTimestamps);
    });
};
