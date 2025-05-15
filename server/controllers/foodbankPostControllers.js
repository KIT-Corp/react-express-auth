/** @format */

const FoodBankPost = require("../models/FoodBankPost");
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
  const { food_bank_id, content } = req.body;
  const user_id = req.session.userId;
  if (!user_id)
    return res.status(403).send({ message: "Unauthorized. Please log in." });

  //check if the use is a food bank
  const currUser = await User.find(user_id);
  if (currUser.isFoodBank === false) {
    return res
      .status(403)
      .send({
        message: "Unauthorized. Only registered foodbanks can create posts.",
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
  const postOwnerId = Number(req.params.id);
  const sessionUserId = Number(req.session.userId);

  if (postOwnerId !== sessionUserId) {
    return res
      .status(403)
      .send({ message: "Unauthorized, you can only edit your own post." });
  }

  const { id, content } = req.body;
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
  const postOwnerId = Number(req.params.id);
  const sessionUserId = req.session.userId;

  if (postOwnerId !== sessionUserId) {
    return res
      .status(403)
      .send({ message: "Unauthorized. You can only delete your own post." });
  }

  const { id } = req.body;
  const deleted = await FoodBankPost.delete(id);
  if (!deleted) {
    return res.status(404).send({ message: "Post not found" });
  }

  res.send({ message: "Post deleted successfully" });
};
