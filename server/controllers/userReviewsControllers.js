const User = require("../models/User");
const UserReview = require("../models/UserReviews");

/* 
GET /api/users/:id/reviews
Returns an array of all reviews for a single user (if found)
*/

//SHOWS ALL REVIEWS for a specific user
exports.showReviews = async (req, res) => {
  const { id } = req.params;

  const user = await User.find(id);
  if (!user) {
    return res.status(404).send({ message: "User not found." });
  }
  const reviews = await UserReview.findAll(id);
  if (!reviews) {
    return res.status(404).send({ message: "No reviews from this user." });
  }
  res.send(reviews);
};

//SHOWS SINGLE REVIEW for a specified user
exports.showReview = async (req, res) => {
  const { id } = req.params;
  const review = await UserReview.findReview(id);
  if (!review) {
    return res.status(404).send({ message: "User review not found." });
  }
  res.send(review);
};

//list all reviews for a specific foodbank
exports.showReviewsByFoodbank = async (req, res) => {
  const { id } = req.params;

  console.log("id", id);

  const reviews = await UserReview.findByFoodbank(id);
  if (!reviews || reviews.length === 0) {
    return res.status(404).send({ message: "No reviews for this food bank." });
  }
  res.send(reviews);
};

//list all reviews
exports.listReviews = async (req, res) => {
  const reviews = await UserReview.list();
  res.send(reviews);
};

//create a new review
exports.createReview = async (req, res) => {
  console.log(req.body);
  const { food_bank_id, content } = req.body;
  const user_id = req.session.userId;
  if (!user_id) {
    return res.status(401).send({ message: "Unauthorized." });
  }
  if (!food_bank_id) {
    return res.status(400).send({ message: "Foodbank required." });
  }
  if (!content) {
    return res.status(400).send({ message: "Content required." });
  }

  const review = await UserReview.create({
    user_id,
    food_bank_id,
    content,
  });
  res.send(review);
};

//update a review
exports.updateReview = async (req, res) => {
  //the id of the review to modify
  const { id } = req.params;
  //the user who is logged in
  const user_id = req.session.userId;

  //a user is only authorized to modify a review if they are logged in
  if (!user_id) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  //find the review in the database to modify
  const reviewToModify = await UserReview.findReview(id);
  if (!reviewToModify) {
    return res.status(404).send({ message: "User review not found." });
  }

  //get the foodbank id from the review to modify
  const foodbankId = reviewToModify.food_bank_id;

  //if the user id from the review does not match the user from the session,
  //then they are not
  if (reviewToModify.user_id !== user_id) {
    return res
      .status(403)
      .send({ message: "Unauthorized. You can only edit your own review." });
  }

  const { content } = req.body;
  if (!content) {
    return res.status(400).send({ message: "Content required." });
  }

  const updatedReview = await UserReview.update(
    id,
    user_id,
    foodbankId,
    content
  );
  if (!updatedReview) {
    return res.status(404).send({ message: "User review not found." });
  }
  res.send(updatedReview);
};

//delete a review
exports.deleteReview = async (req, res) => {
  const { id } = req.params;
  const review = await UserReview.delete(id);
  if (!review) {
    return res.status(404).send({ message: "User review not found." });
  }
  res.send(review);
};
