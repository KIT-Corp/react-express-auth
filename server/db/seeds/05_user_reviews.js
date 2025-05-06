/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('user_reviews').del();
  await knex('user_reviews').insert([
    {
      id: 1,
      user_id: 11,
      foodbank_id: 1,
      content: 'Amazing experience in Manhattan.',
      created_at: new Date(),
    },
    {
      id: 2,
      user_id: 13,
      foodbank_id: 2,
      content: 'Well-organized and efficient in Brooklyn.',
      created_at: new Date(),
    },
    {
      id: 3,
      user_id: 14,
      foodbank_id: 3,
      content: 'Friendly volunteers and staff in Queens.',
      created_at: new Date(),
    },
    {
      id: 4,
      user_id: 16,
      foodbank_id: 4,
      content: 'Loved helping out in the Bronx.',
      created_at: new Date(),
    },
    {
      id: 5,
      user_id: 17,
      foodbank_id: 5,
      content: 'Highly recommend volunteering in Staten Island.',
      created_at: new Date(),
    },
    {
      id: 6,
      user_id: 18,
      foodbank_id: 6,
      content: 'Great experience overall in Manhattan.',
      created_at: new Date(),
    },
    {
      id: 7,
      user_id: 12,
      foodbank_id: 7,
      content: 'So grateful for this place in Brooklyn.',
      created_at: new Date(),
    },
    {
      id: 8,
      user_id: 15,
      foodbank_id: 8,
      content: 'Would volunteer again in Queens!',
      created_at: new Date(),
    },
    {
      id: 9,
      user_id: 19,
      foodbank_id: 9,
      content: 'Wonderful cause in the Bronx.',
      created_at: new Date(),
    },
    {
      id: 10,
      user_id: 20,
      foodbank_id: 10,
      content: 'Well run and organized in Staten Island.',
      created_at: new Date(),
    },
  ]);
};
