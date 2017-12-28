const products = require('./data/products/products.js');

exports.seed = function(knex, Promise) {
  return knex('products').del()
    .then(function () {
      return knex('products').insert(products);
    });
};
