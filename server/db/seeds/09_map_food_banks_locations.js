/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('map_food_bank_locations').del();
  await knex('map_food_bank_locations').insert([
    {
      id: 1,
      name: 'Harlem Food Pantry',
      food_bank_street: '253 W 125th St',
      food_bank_borough: 'Manhattan',
      food_bank_zip: '10027',
      longitude: '-73.9442',
      latitude: '40.8116',
      type: 'Pantry',
    },
    {
      id: 2,
      name: 'Sunset Park Community Kitchen',
      food_bank_street: '5505 4th Ave',
      food_bank_borough: 'Brooklyn',
      food_bank_zip: '11220',
      longitude: '-74.0145',
      latitude: '40.6453',
      type: 'Soup Kitchen',
    },
    {
      id: 3,
      name: 'Queens Mutual Aid',
      food_bank_street: '92-10 Roosevelt Ave',
      food_bank_borough: 'Queens',
      food_bank_zip: '11372',
      longitude: '-73.8801',
      latitude: '40.7498',
      type: 'Pantry',
    },
    {
      id: 4,
      name: 'Bronx Helping Hands',
      food_bank_street: '291 E 149th St',
      food_bank_borough: 'Bronx',
      food_bank_zip: '10451',
      longitude: '-73.9206',
      latitude: '40.8184',
      type: 'Pantry',
    },
    {
      id: 5,
      name: 'Staten Island Relief Center',
      food_bank_street: '120 Stuyvesant Pl',
      food_bank_borough: 'Staten Island',
      food_bank_zip: '10301',
      longitude: '-74.0760',
      latitude: '40.6437',
      type: 'Pantry',
    },
    {
      id: 6,
      name: 'East Village Community Fridge',
      food_bank_street: '35 Avenue A',
      food_bank_borough: 'Manhattan',
      food_bank_zip: '10009',
      longitude: '-73.9836',
      latitude: '40.7265',
      type: 'Pantry',
    },
    {
      id: 7,
      name: 'Flatbush Aid Hub',
      food_bank_street: '1414 Newkirk Ave',
      food_bank_borough: 'Brooklyn',
      food_bank_zip: '11226',
      longitude: '-73.9647',
      latitude: '40.6402',
      type: 'Soup Kitchen',
    },
    {
      id: 8,
      name: 'Jackson Heights Support Center',
      food_bank_street: '37-46 74th St',
      food_bank_borough: 'Queens',
      food_bank_zip: '11372',
      longitude: '-73.8915',
      latitude: '40.7479',
      type: 'Pantry',
    },
    {
      id: 9,
      name: 'Mott Haven Outreach',
      food_bank_street: '502 E 138th St',
      food_bank_borough: 'Bronx',
      food_bank_zip: '10454',
      longitude: '-73.9155',
      latitude: '40.8081',
      type: 'Pantry',
    },
    {
      id: 10,
      name: 'Stapleton Resource Center',
      food_bank_street: '75 Hill St',
      food_bank_borough: 'Staten Island',
      food_bank_zip: '10304',
      longitude: '-74.0737',
      latitude: '40.6203',
      type: 'Pantry',
    },
  ]);
};
