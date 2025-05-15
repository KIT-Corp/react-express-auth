/** @format */

const { raw } = require("express");
const knex = require("../db/knex");

class UserPost {
  constructor({ id, user_id, foodbank_location, content }) {
    this.id = id;
    this.user_id = user_id;
    this.foodbank_location = foodbank_location;
    this.content = content;
  }

  static async create({ user_id, food_bank_location, content }) {
    const query = `
    INSERT INTO user_posts (user_id, food_bank_location, content)
    VALUES (?, ?, ?)
    RETURNING *
  `;

    const result = await knex.raw(query, [
      user_id,
      food_bank_location,
      content,
    ]);

    const rawUserPostData = result.rows[0];
    return new UserPost(rawUserPostData);
  }

  static async list() {
    const query = `SELECT * FROM user_posts`;
    const result = await knex.raw(query);
    return result.rows.map((rawUserPostData) => new UserPost(rawUserPostData));
  }

  static async findByUser(user_id) {
    const query = `SELECT * FROM user_posts WHERE user_id = ?`;
    const result = await knex.raw(query, [user_id]);
    const rawUserPostData = result.rows[0];
    return rawUserPostData ? new UserPost(rawUserPostData) : null;
  }

  //NEEDS TO BE FIXED (find a user post by location of the foodbank)
  static async findByLocation(foodbank_location) {
    const query = `SELECT * FROM user_posts WHERE food_bank_location = ?`;
    const result = await knex.raw(query, [foodbank_location]);
    const rawUserPostData = result.rows[0];
    return rawUserPostData ? new UserPost(rawUserPostData) : null;
  }

  static async update(id, content) {
    const query = `
      UPDATE user_posts
      SET content = ?
      WHERE id = ?
      RETURNING *
    `;
    const result = await knex.raw(query, [content, id]);
    const rawUserPostData = result.rows[0];
    return rawUserPostData ? new UserPost(rawUserPostData) : null;
  }

  //delete a single post
  static async delete(id) {
    const query = `
    DELETE FROM user_posts 
    WHERE id = ?
    RETURNING *
    `;

    const result = await knex.raw(query, [id]);
    const deletedPost = result.rows[0];
    return deletedPost ? new UserPost(deletedPost) : null;
  }

  //delete all posts
  static async deleteAll() {
    return knex("user_posts").del();
  }
}

module.exports = UserPost;
