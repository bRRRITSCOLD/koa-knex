const lineItems = require('./data/line-items/line_items.js');

exports.seed = function(knex, Promise) {
  return knex('line_items').del()
    .then(function () {
      return knex('line_items').insert(lineItems);
    });
};
