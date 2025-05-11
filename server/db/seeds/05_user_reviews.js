/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  await knex('user_reviews').insert([
    {
      user_id: 11,
      food_bank_id: 1,
      content: 'Amazing experience in Manhattan.',
      created_at: new Date(),
    },
    {
      user_id: 13,
      food_bank_id: 2,
      content: 'Well-organized and efficient in Brooklyn.',
      created_at: new Date(),
    },
    {
      user_id: 14,
      food_bank_id: 3,
      content: 'Friendly volunteers and staff in Queens.',
      created_at: new Date(),
    },
    {
      user_id: 16,
      food_bank_id: 4,
      content: 'Loved helping out in the Bronx.',
      created_at: new Date(),
    },
    {
      user_id: 17,
      food_bank_id: 5,
      content: 'Highly recommend volunteering in Staten Island.',
      created_at: new Date(),
    },
    {
      user_id: 18,
      food_bank_id: 6,
      content: 'Great experience overall in Manhattan.',
      created_at: new Date(),
    },
    {
      user_id: 12,
      food_bank_id: 7,
      content: 'So grateful for this place in Brooklyn.',
      created_at: new Date(),
    },
    {
      user_id: 15,
      food_bank_id: 8,
      content: 'Would volunteer again in Queens!',
      created_at: new Date(),
    },
    {
      user_id: 19,
      food_bank_id: 9,
      content: 'Wonderful cause in the Bronx.',
      created_at: new Date(),
    },
    {
      user_id: 20,
      food_bank_id: 10,
      content: 'Well run and organized in Staten Island.',
      created_at: new Date(),
    },
  ]);
};
