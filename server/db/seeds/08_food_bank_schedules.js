/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('food_bank_schedules').del();
  await knex('food_bank_schedules').insert([
    {
      id: 1,
      food_bank_id: 1,
      first_day_open: 'Monday',
      last_day_open: 'Friday',
      opening_hour: '09:00:00',
      closing_hour: '17:00:00',
    },
    {
      id: 2,
      food_bank_id: 2,
      first_day_open: 'Tuesday',
      last_day_open: 'Saturday',
      opening_hour: '10:00:00',
      closing_hour: '16:00:00',
    },
    {
      id: 3,
      food_bank_id: 3,
      first_day_open: 'Monday',
      last_day_open: 'Thursday',
      opening_hour: '08:00:00',
      closing_hour: '14:00:00',
    },
    {
      id: 4,
      food_bank_id: 4,
      first_day_open: 'Wednesday',
      last_day_open: 'Sunday',
      opening_hour: '11:00:00',
      closing_hour: '18:00:00',
    },
    {
      id: 5,
      food_bank_id: 5,
      first_day_open: 'Monday',
      last_day_open: 'Friday',
      opening_hour: '07:30:00',
      closing_hour: '15:30:00',
    },
    {
      id: 6,
      food_bank_id: 6,
      first_day_open: 'Thursday',
      last_day_open: 'Sunday',
      opening_hour: '12:00:00',
      closing_hour: '19:00:00',
    },
    {
      id: 7,
      food_bank_id: 7,
      first_day_open: 'Tuesday',
      last_day_open: 'Saturday',
      opening_hour: '09:30:00',
      closing_hour: '17:30:00',
    },
    {
      id: 8,
      food_bank_id: 8,
      first_day_open: 'Monday',
      last_day_open: 'Friday',
      opening_hour: '10:00:00',
      closing_hour: '16:00:00',
    },
    {
      id: 9,
      food_bank_id: 9,
      first_day_open: 'Wednesday',
      last_day_open: 'Sunday',
      opening_hour: '08:30:00',
      closing_hour: '14:30:00',
    },
    {
      id: 10,
      food_bank_id: 10,
      first_day_open: 'Tuesday',
      last_day_open: 'Saturday',
      opening_hour: '11:00:00',
      closing_hour: '17:00:00',
    },
  ]);
};
