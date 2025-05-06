/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('user_food_bank_post_likes', function (table) {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('id').inTable('users');
    table
      .integer('food_bank_post_id')
      .unsigned()
      .references('id')
      .inTable('food_bank_posts');
    table.timestamp('liked_at').defaultTo(knex.fn.now()).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
