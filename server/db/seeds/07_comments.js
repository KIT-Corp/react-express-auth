/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('comments').del();
  await knex('comments').insert([
    {
      id: 1,
      user_id: 19,
      context: 'Great work in Manhattan!',
      created_at: new Date(),
    },
    {
      id: 2,
      user_id: 13,
      context: 'Brooklyn community thanks you!',
      created_at: new Date(),
    },
    {
      id: 3,
      user_id: 14,
      context: 'Queens appreciates your help!',
      created_at: new Date(),
    },
    {
      id: 4,
      user_id: 16,
      context: 'Thanks for supporting the Bronx!',
      created_at: new Date(),
    },
    {
      id: 5,
      user_id: 17,
      context: 'Staten Island is grateful for your efforts!',
      created_at: new Date(),
    },
    {
      id: 6,
      user_id: 18,
      context: 'Amazing work in Manhattan!',
      created_at: new Date(),
    },
    {
      id: 7,
      user_id: 11,
      context: 'Brooklyn’s food bank appreciates you!',
      created_at: new Date(),
    },
    {
      id: 8,
      user_id: 20,
      context: 'Thanks for helping out in Queens.',
      created_at: new Date(),
    },
    {
      id: 9,
      user_id: 15,
      context: 'Bronx volunteers are the best!',
      created_at: new Date(),
    },
    {
      id: 10,
      user_id: 12,
      context: 'Staten Island teamwork shines!',
      created_at: new Date(),
    },
  ]);
};
