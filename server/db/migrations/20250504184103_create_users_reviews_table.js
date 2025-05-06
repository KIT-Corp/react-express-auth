/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('user_reviews', function (table) {
    table.integer('id').primary();
    table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('SET NULL'); // when the user is deleted, it will set "user_id" to NULL
    table
      .integer('foodbank_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('food_banks')
      .onDelete('CASCADE');
    table.text('content').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user_reviews');
};
