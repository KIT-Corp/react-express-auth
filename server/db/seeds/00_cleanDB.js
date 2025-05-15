/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('comments').del();
  await knex('user_food_bank_post_likes').del();
  await knex('user_reviews').del();
  await knex('food_bank_posts').del();
  await knex('user_posts').del();
  await knex('map_food_bank_locations').del();
  await knex('food_banks').del();
  await knex('users').del();
};
