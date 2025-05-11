/** @format */

const knex = require("../db/knex");

class UserPost {
  constructor({ id, user_id, foodbank_location, content, date_made }) {
    this.id = id;
    this.user_id = user_id;
    this.foodbank_location = foodbank_location;
    this.content = content;
    this.date_made = date_made;
  }

  static async create({ foodbank_location, content, date_made }) {
    const query = `
    INSERT INTO user_posts, foodbank_location, content, date_made)
    VALUES (?, ?, ?, ?)
    RETURNING *
  `;

    const result = await knex.raw(query, [
      foodbank_location,
      content,
      date_made,
    ]);

    const rawUserPostData = result.rows[0];
    return new UserPost(rawUserPostData);
  }

  static async list() {
    const query = `SELECT * FROM user_posts`;
    const result = await knex.raw(query);
    return result.rows.map((rawUserPostData) => new UserPost(rawUserPostData));
  }

  static async find(id) {
    const query = `SELECT * FROM user_posts WHERE id = ?`;
    const result = await knex.raw(query, [id]);
    const rawUserPostData = result.rows[0];
    return rawUserPostData ? new UserPost(rawUserPostData) : null;
  }

  //NEEDS TO BE FIXED (find a user post by location of the foodbank)
  static async findByLocation(foodbank_location) {
    const query = `SELECT * FROM user_posts WHERE location = ?`;
    const result = await knex.raw(query, [foodbank_location]);
    const rawUserPostData = result.rows[0];
    return rawUserPostData ? new UserPost(rawUserPostData) : null;
  }

  static async update(id, foodbank_location) {
    const query = `
      UPDATE user_posts
      SET foodbank_location = ?
      WHERE id = ?
      RETURNING *
    `;

    const result = await knex.raw(query, [id, foodbank_location]);
    const rawUserPostData = result.rows[0];
    return rawUserPostData ? new UserPost(rawUserPostData) : null;
  }

  static async deleteAll() {
    return knex("user_posts").del();
  }
}

module.exports = UserPost;
