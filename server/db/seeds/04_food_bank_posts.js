/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  await knex.raw('ALTER SEQUENCE food_bank_posts_id_seq RESTART WITH 1');

  await knex('food_bank_posts').insert([
    {
      food_bank_id: 1,
      content: 'We need volunteers this Saturday!',
      created_at: new Date(),
    },
    {
      food_bank_id: 2,
      content: 'Donation drive next week - please join.',
      created_at: new Date(),
    },
    {
      food_bank_id: 3,
      content: 'Special thanks to all volunteers!',
      created_at: new Date(),
    },
    {
      food_bank_id: 4,
      content: 'We’re looking for drivers for deliveries.',
      created_at: new Date(),
    },
    {
      food_bank_id: 5,
      content: 'New pantry opening soon!',
      created_at: new Date(),
    },
    {
      food_bank_id: 6,
      content: 'Fresh produce available on Friday.',
      created_at: new Date(),
    },
    {
      food_bank_id: 7,
      content: 'Thank you for your support, Queens!',
      created_at: new Date(),
    },
    {
      food_bank_id: 8,
      content: 'Volunteers needed for Sunday shift.',
      created_at: new Date(),
    },
    {
      food_bank_id: 9,
      content: 'Community BBQ next weekend!',
      created_at: new Date(),
    },
    {
      food_bank_id: 10,
      content: 'Holiday meal drive coming up.',
      created_at: new Date(),
    },
  ]);
};
