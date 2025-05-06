/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const User = require('../../models/User');

exports.seed = async function (knex) {
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');

  // 10 FOOD BANK USERS
  await User.create({
    is_food_bank: true,
    username: 'nyc_foodbank_manhattan1',
    email: 'contact1@nycfoodbankmanhattan.org',
    age: 30,
    password: 'hashed_pw1',
    zipcode: '10001',
  });

  await User.create({
    is_food_bank: true,
    username: 'nyc_foodbank_manhattan2',
    email: 'contact2@nycfoodbankmanhattan.org',
    age: 31,
    password: 'hashed_pw2',
    zipcode: '10002',
  });

  await User.create({
    is_food_bank: true,
    username: 'nyc_foodbank_brooklyn1',
    email: 'contact1@nycfoodbankbrooklyn.org',
    age: 28,
    password: 'hashed_pw3',
    zipcode: '11201',
  });

  await User.create({
    is_food_bank: true,
    username: 'nyc_foodbank_brooklyn2',
    email: 'contact2@nycfoodbankbrooklyn.org',
    age: 29,
    password: 'hashed_pw4',
    zipcode: '11215',
  });

  await User.create({
    is_food_bank: true,
    username: 'nyc_foodbank_queens1',
    email: 'contact1@nycfoodbankqueens.org',
    age: 32,
    password: 'hashed_pw5',
    zipcode: '11368',
  });

  await User.create({
    is_food_bank: true,
    username: 'nyc_foodbank_queens2',
    email: 'contact2@nycfoodbankqueens.org',
    age: 33,
    password: 'hashed_pw6',
    zipcode: '11377',
  });

  await User.create({
    is_food_bank: true,
    username: 'nyc_foodbank_bronx1',
    email: 'contact1@nycfoodbankbronx.org',
    age: 35,
    password: 'hashed_pw7',
    zipcode: '10451',
  });

  await User.create({
    is_food_bank: true,
    username: 'nyc_foodbank_bronx2',
    email: 'contact2@nycfoodbankbronx.org',
    age: 36,
    password: 'hashed_pw8',
    zipcode: '10453',
  });

  await User.create({
    is_food_bank: true,
    username: 'nyc_foodbank_statenisland1',
    email: 'contact1@nycfoodbankstatenisland.org',
    age: 29,
    password: 'hashed_pw9',
    zipcode: '10301',
  });

  await User.create({
    is_food_bank: true,
    username: 'nyc_foodbank_statenisland2',
    email: 'contact2@nycfoodbankstatenisland.org',
    age: 30,
    password: 'hashed_pw10',
    zipcode: '10314',
  });

  // 10 REGULAR USERS
  await User.create({
    is_food_bank: false,
    username: 'john_doe',
    email: 'john.doe@gmail.com',
    age: 25,
    password: 'hashed_pw11',
    zipcode: '10001',
  });

  await User.create({
    is_food_bank: false,
    username: 'emma_w',
    email: 'emma.w@gmail.com',
    age: 31,
    password: 'hashed_pw12',
    zipcode: '11201',
  });

  await User.create({
    is_food_bank: false,
    username: 'michael_b',
    email: 'michael.b@gmail.com',
    age: 40,
    password: 'hashed_pw13',
    zipcode: '11368',
  });

  await User.create({
    is_food_bank: false,
    username: 'sophia_king',
    email: 'sophia.k@gmail.com',
    age: 27,
    password: 'hashed_pw14',
    zipcode: '10451',
  });

  await User.create({
    is_food_bank: false,
    username: 'david_ross',
    email: 'david.r@gmail.com',
    age: 35,
    password: 'hashed_pw15',
    zipcode: '10301',
  });

  await User.create({
    is_food_bank: false,
    username: 'linda_m',
    email: 'linda.m@gmail.com',
    age: 29,
    password: 'hashed_pw16',
    zipcode: '10002',
  });

  await User.create({
    is_food_bank: false,
    username: 'kevin_p',
    email: 'kevin.p@gmail.com',
    age: 22,
    password: 'hashed_pw17',
    zipcode: '11215',
  });

  await User.create({
    is_food_bank: false,
    username: 'nancy_j',
    email: 'nancy.j@gmail.com',
    age: 26,
    password: 'hashed_pw18',
    zipcode: '11377',
  });

  await User.create({
    is_food_bank: false,
    username: 'peter_s',
    email: 'peter.s@gmail.com',
    age: 38,
    password: 'hashed_pw19',
    zipcode: '10453',
  });

  await User.create({
    is_food_bank: false,
    username: 'amy_l',
    email: 'amy.l@gmail.com',
    age: 24,
    password: 'hashed_pw20',
    zipcode: '10314',
  });
};
