/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  await knex('user_food_bank_post_likes').insert([
    { user_id: 12, food_bank_post_id: 1, liked_at: new Date() },
    { user_id: 13, food_bank_post_id: 2, liked_at: new Date() },
    { user_id: 14, food_bank_post_id: 3, liked_at: new Date() },
    { user_id: 16, food_bank_post_id: 4, liked_at: new Date() },
    { user_id: 17, food_bank_post_id: 5, liked_at: new Date() },
    { user_id: 18, food_bank_post_id: 6, liked_at: new Date() },
    { user_id: 11, food_bank_post_id: 7, liked_at: new Date() },
    { user_id: 19, food_bank_post_id: 8, liked_at: new Date() },
    { user_id: 20, food_bank_post_id: 9, liked_at: new Date() },
    { user_id: 15, food_bank_post_id: 10, liked_at: new Date() },
  ]);
};
