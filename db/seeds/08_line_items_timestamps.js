const lineItemsTimestamps = require('./data/line-items/line_items_timestamps.js');

exports.seed = function(knex, Promise) {
  return knex('line_items_timestamps').del()
    .then(function () {
      return knex('line_items_timestamps').insert(lineItemsTimestamps);
    });
};
