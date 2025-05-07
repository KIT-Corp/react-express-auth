/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('food_bank_schedules', function (table) {
    table.increments('id').primary();
    table
      .integer('food_bank_id')
      .unsigned()
      .references('id')
      .inTable('food_banks')
      .onDelete('CASCADE');
    table.text('first_day_open').notNullable();
    table.text('last_day_open').notNullable();
    table.time('opening_hour').notNullable();
    table.time('closing_hour').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('food_bank_schedules');
};
