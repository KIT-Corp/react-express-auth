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
      user_id: 19,
      context: 'Great work in Manhattan!',
      created_at: new Date(),
    },
    {
      user_id: 13,
      context: 'Brooklyn community thanks you!',
      created_at: new Date(),
    },
    {
      user_id: 14,
      context: 'Queens appreciates your help!',
      created_at: new Date(),
    },
    {
      user_id: 16,
      context: 'Thanks for supporting the Bronx!',
      created_at: new Date(),
    },
    {
      user_id: 17,
      context: 'Staten Island is grateful for your efforts!',
      created_at: new Date(),
    },
    {
      user_id: 18,
      context: 'Amazing work in Manhattan!',
      created_at: new Date(),
    },
    {
      user_id: 11,
      context: 'Brooklyn’s food bank appreciates you!',
      created_at: new Date(),
    },
    {
      user_id: 20,
      context: 'Thanks for helping out in Queens.',
      created_at: new Date(),
    },
    {
      user_id: 15,
      context: 'Bronx volunteers are the best!',
      created_at: new Date(),
    },
    {
      user_id: 12,
      context: 'Staten Island teamwork shines!',
      created_at: new Date(),
    },
  ]);
};
