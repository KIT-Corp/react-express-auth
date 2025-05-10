/** @format */

const knex = require("../db/knex");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 12;

class User {
  #passwordHash = null; // a private property

  // Create a User instance with the password hidden
  // Instances of User can be sent to clients without exposing the password
  constructor({
    id,
    is_food_bank,
    username,
    email,
    age,
    password_hash,
    zipcode,
  }) {
    this.id = id;
    this.isFoodBank = is_food_bank;
    this.username = username;
    this.email = email;
    this.age = age;
    this.#passwordHash = password_hash;
    this.zipcode = zipcode;
  }

  // Controllers can use this instance method to validate passwords prior to sending responses
  /* That isValidPassword method is defined inside the User class as an instance method, 
  so it’s not a standalone variable. It’s being defined on each instance of the class.

  This means that when you create a new User object, it will have access to this method.
   */
  isValidPassword = async (password) => {
    return await bcrypt.compare(password, this.#passwordHash);
  };

  // Hashes the given password and then creates a new user
  // in the users table. Returns the newly created user, using
  // the constructor to hide the passwordHash.
  static async create({
    username,
    password,
    email,
    is_food_bank,
    age,
    zipcode,
  }) {
    // hash the plain-text password using bcrypt before storing it in the database
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    //Pass values using SQL query parameters to prevent SQL injection
    //Ensure that the values match the correct column types in the database
    const query = `
    INSERT INTO users (is_food_bank, username, email, age, password_hash, zipcode)
    VALUES (?, ?, ?, ?, ?, ?)
    RETURNING *
  `;

    //we pass passwordHash to the query instead of password
    //because we want to store the hashed password in the database

    /*since passwordHash is also a private property in the constructor
     it will not be exposed when we create a new user and log the result
    */
    const result = await knex.raw(query, [
      is_food_bank,
      username,
      email,
      age,
      passwordHash,
      zipcode,
    ]);

    const rawUserData = result.rows[0];
    return new User(rawUserData);
  }

  // Fetches ALL users from the users table, uses the constructor
  // to format each user (and hide their password hash), and returns.
  static async list() {
    const query = `SELECT * FROM users`;
    const result = await knex.raw(query);
    return result.rows.map((rawUserData) => new User(rawUserData));
  }

  // Fetches A single user from the users table that matches
  // the given user id. If it finds a user, uses the constructor
  // to format the user and returns or returns null if not.
  static async find(id) {
    const query = `SELECT * FROM users WHERE id = ?`;
    const result = await knex.raw(query, [id]);
    const rawUserData = result.rows[0];
    return rawUserData ? new User(rawUserData) : null;
  }

  // Same as above but uses the username to find the user
  static async findByUsername(username) {
    const query = `SELECT * FROM users WHERE username = ?`;
    const result = await knex.raw(query, [username]);
    const rawUserData = result.rows[0];
    return rawUserData ? new User(rawUserData) : null;
  }

  // Updates the user that matches the given id with a new username.
  // Returns the modified user, using the constructor to hide the passwordHash.
  static async update(id, username, email, age, zipcode) {
    const query = `
      UPDATE users
      SET username = ?,
      email = ?,
      age = ?,
      zipcode = ?
      WHERE id = ?
      RETURNING *
    `;
    const result = await knex.raw(query, [username, email, age, zipcode, id]);
    const rawUpdatedUser = await result.rows[0];
    return rawUpdatedUser ? new User(rawUpdatedUser) : null;
  }

  static async deleteAll() {
    return knex("users").del();
  }
}

module.exports = User;
