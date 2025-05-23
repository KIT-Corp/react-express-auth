/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  await knex.raw('ALTER SEQUENCE food_banks_id_seq RESTART WITH 1');

  await knex('food_banks').insert([
    {
      user_id: 1,
      name: 'Manhattan Food Bank 1',
      food_bank_street: '123 Main St',
      food_bank_borough: 'Manhattan',
      food_bank_zip: '10001',
      type: 'Pantry',
      phone_number: '2125551001',
    },
    {
      user_id: 2,
      name: 'Manhattan Food Bank 2',
      food_bank_street: '456 Broadway',
      food_bank_borough: 'Manhattan',
      food_bank_zip: '10002',
      type: 'Soup Kitchen',
      phone_number: '2125551002',
    },
    {
      user_id: 3,
      name: 'Brooklyn Food Bank 1',
      food_bank_street: '789 Flatbush Ave',
      food_bank_borough: 'Brooklyn',
      food_bank_zip: '11201',
      type: 'Pantry',
      phone_number: '7185551003',
    },
    {
      user_id: 4,
      name: 'Brooklyn Food Bank 2',
      food_bank_street: '321 Bedford Ave',
      food_bank_borough: 'Brooklyn',
      food_bank_zip: '11211',
      type: 'Soup Kitchen',
      phone_number: '7185551004',
    },
    {
      user_id: 5,
      name: 'Queens Food Bank 1',
      food_bank_street: '654 Queens Blvd',
      food_bank_borough: 'Queens',
      food_bank_zip: '11373',
      type: 'Pantry',
      phone_number: '3475551005',
    },
    {
      user_id: 6,
      name: 'Queens Food Bank 2',
      food_bank_street: '987 Northern Blvd',
      food_bank_borough: 'Queens',
      food_bank_zip: '11374',
      type: 'Soup Kitchen',
      phone_number: '3475551006',
    },
    {
      user_id: 7,
      name: 'Bronx Food Bank 1',
      food_bank_street: '135 Grand Concourse',
      food_bank_borough: 'Bronx',
      food_bank_zip: '10451',
      type: 'Pantry',
      phone_number: '7185551007',
    },
    {
      user_id: 8,
      name: 'Bronx Food Bank 2',
      food_bank_street: '246 Jerome Ave',
      food_bank_borough: 'Bronx',
      food_bank_zip: '10452',
      type: 'Soup Kitchen',
      phone_number: '7185551008',
    },
    {
      user_id: 9,
      name: 'Staten Island Food Bank 1',
      food_bank_street: '369 Bay St',
      food_bank_borough: 'Staten Island',
      food_bank_zip: '10301',
      type: 'Pantry',
      phone_number: '7185551009',
    },
    {
      user_id: 10,
      name: 'Staten Island Food Bank 2',
      food_bank_street: '159 Richmond Ave',
      food_bank_borough: 'Staten Island',
      food_bank_zip: '10302',
      type: 'Soup Kitchen',
      phone_number: '7185551010',
    },
  ]);
};
