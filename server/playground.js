const comments = require("./models/Comments");
const foodBankPosts = require("./models/FoodBankPost");
const userFoodBankPostLikes = require("./models/UserFoodBankPostLikes");
const userReviews = require("./models/UserReviews");
const userPosts = require("./models/UserPosts");
const foodBankSchedule = require("./models/FoodbankSchedule");
const foodBanks = require("./models/Foodbank");
const user = require("./models/User");

const userExample = {
  username: "wraymar",
  password: "password",
  email: "wraymar@email.com",
  is_food_bank: false,
  age: "23",
  zipcode: "11000",
};

//FIND USERS
// const createUser = user.create(userExample);

// console.log("User Created: ", createUser);
