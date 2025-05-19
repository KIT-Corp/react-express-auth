/** @format */

const User = require('../models/User');
require('dotenv').config();

exports.registerUser = async (req, res) => {
  // Request needs a body
  if (!req.body) {
    return res.status(400).send({ message: 'Username and password required' });
  }

  // Body needs a username and password
  // changed here
  const { is_food_bank, username, email, age, password, zipcode } = req.body;

  if (
    typeof is_food_bank !== 'boolean' ||
    !username?.trim() ||
    !email?.trim() ||
    !password ||
    !zipcode?.trim()
  ) {
    return res
      .status(400)
      .send({ message: 'All required fields must be provided' });
  }

  // User.create will handle hashing the password and storing in the database
  const user = await User.create({
    username,
    password,
    email,
    is_food_bank,
    age,
    zipcode,
  });

  // Add the user id to the cookie and send the user data back

  /*the user id from the database is stored in the session so that
  it can be used to identify the user in future requests. The session is
  stored in a cookie on the clinet side, and the cookie is sent back to the server 
  with each request. The server can then use the session id to look up the user in the database.
  This allows the server to authenticate the user and authorize them to access protected resources.
  */

  //Upon registering a new user, we need to set the request session id to be the newly created
  //user id from the database.
  //console.log(req.session);
  req.session.userId = user.id;
  res.send(user);
};

exports.loginUser = async (req, res) => {
  // Request needs a body
  if (!req.body) {
    return res.status(400).send({ message: 'All of the above are required' });
  }

  // Body needs a username and password
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .send({ message: 'Missing or incorrect values, please try again' });
  }

  // Username must be valid
  const user = await User.findByUsername(username);
  if (!user) {
    return res.status(404).send({ message: 'User not found.' });
  }

  // Password must match
  const isPasswordValid = await user.isValidPassword(password);
  if (!isPasswordValid) {
    return res.status(401).send({ message: 'Invalid credentials.' });
  }

  // Add the user id to the cookie and send the user data back
  console.log(req.session);

  //when we log the user we will see isValidPassword: [AsyncFunction: isValidPassword],
  //this is because Javascript treats instance methods as properties of the class
  console.log(user);
  //after we found the user and verified the password we can add the user id to the session
  //we use the cookie session to verify the user in future requests
  req.session.userId = user.id;
  //send the user back to the client so that we can use it in the frontend
  res.send(user);
};

exports.showMe = async (req, res) => {
  // no cookie with an id => Not authenticated.
  if (!req.session.userId) {
    return res.status(401).send({ message: 'User must be authenticated.' });
  }

  // cookie with an id => here's your user info!
  /*now we use the session id to look up everything about the user in the database 
  and send it back to the client. This is done by calling the find method we created on the User model.
  */
  const user = await User.find(req.session.userId);
  /*this console.log will show us the user object that was returned from the database.
  We use json.stringify to convert the object in a string format so that we can use it within template literals.
  */
  //console.log(`data from hitting "show me": ${JSON.stringify(user, null, 2)}`);
  res.send(user);
};

exports.logoutUser = (req, res) => {
  console.log('Session object at logout hit:', req.session);
  if (!req.session.userId) {
    return res.status(401).send({ message: 'User must be authenticated.' });
  }
  // Remove the user id from the cookie
  console.log('Before clearing sesion', req.session);
  req.session = null; // "erase" the cookie
  console.log('After clearing session', req.session);
  res.status(200).send({ message: 'User logged out.' });
};
