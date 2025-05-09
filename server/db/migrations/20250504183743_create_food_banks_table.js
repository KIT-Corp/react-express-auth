/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('food_banks', function (table) {
    table.increments('id').primary();
    table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table.string('name').notNullable();
    table.text('food_bank_street').notNullable();
    table.text('food_bank_borough').notNullable();
    table.text('food_bank_zip').notNullable();
    table.text('type').notNullable();
    table.string('phone_number').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('food_banks');
};
