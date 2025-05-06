/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('food_banks').del();
  await knex('food_banks').insert([
    {
      id: 1,
      user_id: 1,
      name: 'Manhattan Food Bank 1',
      foodbank_location: 'Manhattan, NY',
    },
    {
      id: 2,
      user_id: 2,
      name: 'Manhattan Food Bank 2',
      foodbank_location: 'Manhattan, NY',
    },
    {
      id: 3,
      user_id: 3,
      name: 'Brooklyn Food Bank 1',
      foodbank_location: 'Brooklyn, NY',
    },
    {
      id: 4,
      user_id: 4,
      name: 'Brooklyn Food Bank 2',
      foodbank_location: 'Brooklyn, NY',
    },
    {
      id: 5,
      user_id: 5,
      name: 'Queens Food Bank 1',
      foodbank_location: 'Queens, NY',
    },
    {
      id: 6,
      user_id: 6,
      name: 'Queens Food Bank 2',
      foodbank_location: 'Queens, NY',
    },
    {
      id: 7,
      user_id: 7,
      name: 'Bronx Food Bank 1',
      foodbank_location: 'Bronx, NY',
    },
    {
      id: 8,
      user_id: 8,
      name: 'Bronx Food Bank 2',
      foodbank_location: 'Bronx, NY',
    },
    {
      id: 9,
      user_id: 9,
      name: 'Staten Island Food Bank 1',
      foodbank_location: 'Staten Island, NY',
    },
    {
      id: 10,
      user_id: 10,
      name: 'Staten Island Food Bank 2',
      foodbank_location: 'Staten Island, NY',
    },
  ]);
};
2;
