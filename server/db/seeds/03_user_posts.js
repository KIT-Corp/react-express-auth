/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  await knex('user_posts').insert([
    {
      user_id: 11,
      food_bank_location: 'Manhattan, NY',
      content: 'Volunteered today at Manhattan Food Bank. Great experience!',
      date_made: new Date(),
    },
    {
      user_id: 12,
      food_bank_location: 'Brooklyn, NY',
      content: 'Dropped off canned goods at Brooklyn Food Bank.',
      date_made: new Date(),
    },
    {
      user_id: 13,
      food_bank_location: 'Queens, NY',
      content: 'Happy to help at Queens Food Bank!',
      date_made: new Date(),
    },
    {
      user_id: 14,
      food_bank_location: 'Bronx, NY',
      content: 'Organized donations at Bronx Food Bank.',
      date_made: new Date(),
    },
    {
      user_id: 15,
      food_bank_location: 'Staten Island, NY',
      content:
        'First volunteer day at Staten Island Food Bank, amazing turnout.',
      date_made: new Date(),
    },
    {
      user_id: 16,
      food_bank_location: 'Manhattan, NY',
      content: 'Met some inspiring people today at Manhattan Food Bank.',
      date_made: new Date(),
    },
    {
      user_id: 17,
      food_bank_location: 'Brooklyn, NY',
      content: 'Packed meals for families in need at Brooklyn Food Bank.',
      date_made: new Date(),
    },
    {
      user_id: 18,
      food_bank_location: 'Queens, NY',
      content: 'Distributed food bags today at Queens Food Bank.',
      date_made: new Date(),
    },
    {
      user_id: 19,
      food_bank_location: 'Bronx, NY',
      content: 'Helped sort fresh produce at Bronx Food Bank.',
      date_made: new Date(),
    },
    {
      user_id: 20,
      food_bank_location: 'Staten Island, NY',
      content: 'Great teamwork at Staten Island Food Bank!',
      date_made: new Date(),
    },
  ]);
};
