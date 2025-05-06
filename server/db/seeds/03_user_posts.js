/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('user_posts').del();
  await knex('user_posts').insert([
    {
      id: 1,
      user_id: 11,
      foodbank_location: 'Manhattan, NY',
      content: 'Volunteered today at Manhattan Food Bank. Great experience!',
      date_made: new Date(),
    },
    {
      id: 2,
      user_id: 12,
      foodbank_location: 'Brooklyn, NY',
      content: 'Dropped off canned goods at Brooklyn Food Bank.',
      date_made: new Date(),
    },
    {
      id: 3,
      user_id: 13,
      foodbank_location: 'Queens, NY',
      content: 'Happy to help at Queens Food Bank!',
      date_made: new Date(),
    },
    {
      id: 4,
      user_id: 14,
      foodbank_location: 'Bronx, NY',
      content: 'Organized donations at Bronx Food Bank.',
      date_made: new Date(),
    },
    {
      id: 5,
      user_id: 15,
      foodbank_location: 'Staten Island, NY',
      content:
        'First volunteer day at Staten Island Food Bank, amazing turnout.',
      date_made: new Date(),
    },
    {
      id: 6,
      user_id: 16,
      foodbank_location: 'Manhattan, NY',
      content: 'Met some inspiring people today at Manhattan Food Bank.',
      date_made: new Date(),
    },
    {
      id: 7,
      user_id: 17,
      foodbank_location: 'Brooklyn, NY',
      content: 'Packed meals for families in need at Brooklyn Food Bank.',
      date_made: new Date(),
    },
    {
      id: 8,
      user_id: 18,
      foodbank_location: 'Queens, NY',
      content: 'Distributed food bags today at Queens Food Bank.',
      date_made: new Date(),
    },
    {
      id: 9,
      user_id: 19,
      foodbank_location: 'Bronx, NY',
      content: 'Helped sort fresh produce at Bronx Food Bank.',
      date_made: new Date(),
    },
    {
      id: 10,
      user_id: 20,
      foodbank_location: 'Staten Island, NY',
      content: 'Great teamwork at Staten Island Food Bank!',
      date_made: new Date(),
    },
  ]);
};
