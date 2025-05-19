/** @format */

const UserPost = require("../models/UserPost");

/*
GET /users/:id/posts
Returns posts made by a specific user
*/
exports.getPostsByUser = async (req, res) => {
  const { id } = req.params;
  const posts = await UserPost.findByUser(id);
  if (!posts) {
    return res.status(404).send({ message: "No posts found for this user." });
  }
  res.send(posts);
};

/*
POST /users/posts/create
Creates a new user post
*/
exports.createUserPost = async (req, res) => {
  const { food_bank_location, content } = req.body;
  const user_id = req.session.userId;
  if (!user_id)
    return res.status(403).send({ message: "Unauthorized. Please log in." });

  const newPost = await UserPost.create({
    user_id,
    food_bank_location,
    content,
  });
  res.status(201).send(newPost);
};

/*
PATCH /users/:id/posts
Updates a user's post (must be their own)
*/
exports.updateUserPost = async (req, res) => {
  const postOwnerId = Number(req.params.id);
  const sessionUserId = Number(req.session.userId);

  if (postOwnerId !== sessionUserId) {
    return res
      .status(403)
      .send({ message: "Unauthorized, you can only edit your own post." });
  }

  const { id, content } = req.body;
  const updated = await UserPost.update(id, content);
  if (!updated) {
    return res.status(404).send({ message: "Post not found" });
  }
  res.send(updated);
};

/*
DELETE /users/:id/posts
Deletes a user's post (must be their own)
*/
exports.deleteUserPost = async (req, res) => {
  const postOwnerId = Number(req.params.id);
  const sessionUserId = req.session.userId;

  if (postOwnerId !== sessionUserId) {
    return res
      .status(403)
      .send({ message: "Unauthorized. You can only delete your own post." });
  }

  const { id } = req.body;
  const deleted = await UserPost.delete(id);
  if (!deleted) {
    return res.status(404).send({ message: "Post not found" });
  }
  res.send({ message: "Post deleted successfully" });
};
