/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('comments', function (table) {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('id').inTable('users');
    table.text('context').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('comments');
};
