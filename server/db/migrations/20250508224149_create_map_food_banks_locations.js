/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('map_food_bank_locations', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('food_bank_street').notNullable();
    table.text('food_bank_borough').notNullable();
    table.text('food_bank_zip').notNullable();
    table.string('longitude').notNullable();
    table.string('latitude').notNullable();
    table.text('type').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('map_food_bank_locations');
};
