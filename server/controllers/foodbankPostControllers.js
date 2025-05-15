/** @format */

const FoodBankPost = require("../models/FoodBankPost");
const FoodBank = require("../models/Foodbank");
const User = require("../models/User");

/*
GET /users/:id/posts
Returns posts made by a specific user
*/
exports.getPostsByFoodBank = async (req, res) => {
  const { id } = req.params;
  const posts = await FoodBankPost.find(id);
  if (!posts) {
    return res.status(404).send({ message: "No posts found for this user." });
  }
  res.send(posts);
};

/*
POST /users/posts/create
Creates a new user post
*/
exports.createFoodBankPost = async (req, res) => {
  const { content } = req.body;
  const user_id = req.session.userId;
  const foodBank = await FoodBank.findByUser(user_id);
  const food_bank_id = foodBank.id;
  if (!user_id) {
    return res.status(403).send({ message: "Unauthorized. Please log in." });
  }

  //check if the use is a food bank
  const currUser = await User.find(user_id);
  if (currUser.isFoodBank === false) {
    return res.status(403).send({
      message:
        "Unauthorized. Only registered foodbank accounts can create posts.",
    });
  } else {
    const newPost = await FoodBankPost.create({
      food_bank_id,
      content,
    });
    console.log(newPost);
    res.status(201).send(newPost);
  }
};

/*
PATCH /users/:id/posts
Updates a user's post (must be their own)
*/
exports.updateFoodBankPost = async (req, res) => {
  const foodBankPost = await FoodBankPost.find(req.params.id);
  const foodBank = await FoodBank.find(foodBankPost.food_bank_id);
  const foodBankUserId = foodBank.user_id;
  const id = req.params.id;

  const sessionUserId = Number(req.session.userId);
  if (foodBankUserId !== sessionUserId) {
    return res
      .status(403)
      .send({ message: "Unauthorized, you can only edit your own post." });
  }

  const { content } = req.body;
  const updated = await FoodBankPost.update(id, content);
  if (!updated) {
    return res.status(404).send({ message: "Post not found" });
  }
  res.send(updated);
};

/*
DELETE /users/:id/posts
Deletes a user's post (must be their own)
*/
exports.deleteFoodBankPost = async (req, res) => {
  const foodBankPost = await FoodBankPost.find(req.params.id);
  const foodBank = await FoodBank.find(foodBankPost.food_bank_id);
  const foodBankUserId = foodBank.user_id;
  const sessionUserId = Number(req.session.userId);

  if (foodBankUserId !== sessionUserId) {
    return res
      .status(403)
      .send({ message: "Unauthorized. You can only delete your own post." });
  }

  const id = req.params.id;
  const deleted = await FoodBankPost.delete(id);
  if (!deleted) {
    return res.status(404).send({ message: "Post not found" });
  }

  res.send({ message: "Post deleted successfully" });
};
