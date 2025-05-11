/** @format */

///////////////////////////////
// Imports
///////////////////////////////

require("dotenv").config();
const path = require("path");
const express = require("express");

// TEMP: Verify SESSION_SECRET is loaded (safe way)

// if (!process.env.SESSION_SECRET) {
//   console.error("❌ SESSION_SECRET is missing!");
//   process.exit(1); // Stop the app
// } else {
//   //!! just checks if the value is truthy instead of logging the value
//   // This is a good way to check if the environment variable is loaded
//   console.log("✅ SESSION_SECRET is loaded:", !!process.env.SESSION_SECRET);
// }

// middleware imports
const handleCookieSessions = require("./middleware/handleCookieSessions");
const checkAuthentication = require("./middleware/checkAuthentication");
const logRoutes = require("./middleware/logRoutes");
const logErrors = require("./middleware/logErrors");

// controller imports
const authControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");
const reviewsControllers = require("./controllers/userReviewsControllers");
const app = express();

// middleware
app.use(handleCookieSessions); // adds a session property to each request representing the cookie
app.use(logRoutes); // print information about each incoming request
app.use(express.json()); // parse incoming request bodies as JSON
app.use(express.static(path.join(__dirname, "../frontend/dist"))); // Serve static assets from the dist folder of the frontend

///////////////////////////////
// Auth Routes
///////////////////////////////

//register a new user
app.post("/api/auth/register", authControllers.registerUser);

//login using to an existing user
app.post("/api/auth/login", authControllers.loginUser);

//show the current user
app.get("/api/auth/me", authControllers.showMe);

//logout the current user
app.delete("/api/auth/logout", authControllers.logoutUser);

///////////////////////////////
// User Routes
///////////////////////////////

// These actions require users to be logged in (authentication)
// Express lets us pass a piece of middleware to run for a specific endpoint

//list all users
app.get("/api/users", checkAuthentication, userControllers.listUsers);

//get a specifc user
app.get("/api/users/:id", checkAuthentication, userControllers.showUser);

//update a specific user
app.patch("/api/users/:id", checkAuthentication, userControllers.updateUser);

///////////////////////////////
// User Rewiew routes
///////////////////////////////

//create a new review
app.post(
  "/api/reviews/create",
  checkAuthentication,
  reviewsControllers.createReview
);

//get a specific review
app.get("/api/reviews/:id", checkAuthentication, reviewsControllers.showReview);

//update a specific review
app.patch(
  "/api/reviews/:id",
  checkAuthentication,
  reviewsControllers.updateReview
);

//delete a specific review
app.delete(
  "/api/reviews/:id",
  checkAuthentication,
  reviewsControllers.deleteReview
);

//List all reviews from a specific user
app.get(
  "/api/users/:id/reviews",
  checkAuthentication,
  reviewsControllers.showReviews
);

//list all reviews from a specific foodbank
app.get(
  "/api/foodbanks/:id/reviews",
  checkAuthentication,
  reviewsControllers.showReviewsByFoodbank
);

//List reviews for all users
app.get(
  "/api/users/reviews",
  checkAuthentication,
  reviewsControllers.listReviews
);

///////////////////////////////
// Fallback Routes
///////////////////////////////

///////////////////////////////
// User Post routes
///////////////////////////////

///////////////////////////////
// FoodBank Post routes
///////////////////////////////

///////////////////////////////
// FoodBank schedule routes
///////////////////////////////

///////////////////////////////
// Comments routes
///////////////////////////////

///////////////////////////////
// Foodbank Routes
///////////////////////////////

// Requests meant for the API will be sent along to the router.
// For all other requests, send back the index.html file in the dist folder.
app.get("*", (req, res, next) => {
  if (req.originalUrl.startsWith("/api")) return next();
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.use(logErrors);

///////////////////////////////
// Start Listening
///////////////////////////////

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
