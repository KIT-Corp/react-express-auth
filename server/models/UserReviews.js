/** @format */

const knex = require("../db/knex");

class UserReview {
  constructor({ id, user_id, food_bank_id, content, created_at }) {
    this.id = id;
    this.user_id = user_id;
    this.food_bank_id = food_bank_id;
    this.content = content;
    this.created_at = created_at;
  }

  static async create({ user_id, food_bank_id, content }) {
    const query = `
    INSERT INTO user_reviews (user_id, food_bank_id, content)
    VALUES (?, ?, ?)
    RETURNING *
  `;

    const result = await knex.raw(query, [user_id, food_bank_id, content]);

    const rawUserReviewData = result.rows[0];
    return new UserReview(rawUserReviewData);
  }

  static async list() {
    const query = `SELECT * FROM user_reviews`;
    const result = await knex.raw(query);
    return result.rows.map(
      (rawUserReviewData) => new UserReview(rawUserReviewData)
    );
  }

  //find a specific review
  static async findReview(id) {
    const query = `SELECT * FROM user_reviews WHERE id = ?`;
    const result = await knex.raw(query, [id]);
    const rawUserReviewData = result.rows[0];
    return rawUserReviewData ? new UserReview(rawUserReviewData) : null;
  }

  //find all reviews from a specific user
  static async findAll(user_id) {
    const query = `SELECT * FROM user_reviews WHERE user_id = ?`;
    const result = await knex.raw(query, [user_id]);
    return result.rows.map((data) => new UserReview(data)) || null;
  }

  static async findByFoodbank(food_bank_id) {
    const query = `SELECT * FROM user_reviews WHERE food_bank_id = ?`;
    const result = await knex.raw(query, [food_bank_id]);
    return result.rows.map((data) => new UserReview(data)) || null;
  }

  static async update(user_id, food_bank_id, content, id) {
    const query = `
      UPDATE user_reviews
      SET user_id = ?,
      food_bank_id = ?,
      content = ?
      WHERE id = ?
      RETURNING *
    `;

    const result = await knex.raw(query, [user_id, food_bank_id, content, id]);
    const rawUserReviewData = result.rows[0];
    return rawUserReviewData ? new UserReview(rawUserReviewData) : null;
  }

  static async delete(id) {
    const query = `
      DELETE FROM user_reviews
      WHERE id = ?
      RETURNING *
    `;

    const result = await knex.raw(query, [id]);
    const deleted = result.rows[0];
    return deleted ? new UserReview(deleted) : null;
  }

  static async deleteAll() {
    return knex("user_reviews").del();
  }
}

module.exports = UserReview;
