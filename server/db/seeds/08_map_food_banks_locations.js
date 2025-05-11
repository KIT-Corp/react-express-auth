/** @format */

const fs = require('fs');
const path = require('path');
const db = require('../knex');

const boroughMap = {
  BK: 'Brooklyn',
  MN: 'Manhattan',
  BX: 'Bronx',
  QN: 'Queens',
  SI: 'Staten Island',
};

exports.seed = async function () {
  const filePath = path.resolve(__dirname, '../../mapFoodBankCoords.json'); // Correct path
  const rawData = fs.readFileSync(filePath, 'utf-8');
  const foodBanks = JSON.parse(rawData);

  const insertData = Object.entries(foodBanks).map(([_, bank]) => {
    const addr = bank.Address || {};
    const sched = Array.isArray(bank.Schedules) ? bank.Schedules[0] : {};

    return {
      name: bank.Program,
      phone_number: bank.Phone || 'N/A',
      type: bank.Type || 'Pantry',
      food_bank_street: addr.Street || 'N/A',
      food_bank_borough: boroughMap[addr.Borough] || addr.Borough || 'Unknown',
      food_bank_zip: addr.ZIP || '00000',
      longitude: addr.longitude?.toString() || '0',
      latitude: addr.latitude?.toString() || '0',
      days_open: sched.Days || 'Unknown',
      opening_hour: sched.openingHour || 'N/A',
      closing_hour: sched.closingHour || 'N/A',
    };
  });

  await db.raw('ALTER SEQUENCE map_food_bank_locations_id_seq RESTART WITH 1');
  await db('map_food_bank_locations').insert(insertData);
  console.log(`✅ Inserted ${insertData.length} food banks!`);
};
