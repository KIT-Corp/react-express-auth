/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary();
    table.string('profile_picture').nullable();
    table.boolean('is_food_bank').notNullable().defaultTo(false);
    table.string('username').unique().notNullable();
    table.string('email').unique().notNullable();
    table.integer('age').nullable();
    table.string('password_hash').notNullable();
    table.string('zipcode', 10);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
