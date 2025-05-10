const User = require("../models/User");
const UserReview = require("../models/UserReviews");

/* 
GET /api/users/:id/reviews
Returns an array of all reviews for a single user (if found)
*/

exports.showReviews = async (req, res) => {
  const { id } = req.params;

  const user = await User.find(id);
  if (!user) {
    return res.status(404).send({ message: "User not found." });
  }
  const reviews = await UserReview.find(id);
  if (!reviews) {
    return res.status(404).send({ message: "User reviews not found." });
  }
  res.send(reviews);
};

exports.listReviews = async (req, res) => {
  const reviews = await UserReview.list();
  res.send(reviews);
};
