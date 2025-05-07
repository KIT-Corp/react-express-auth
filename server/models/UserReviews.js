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

  static async create({ food_bank_id, content, date_made }) {
    const query = `
    INSERT INTO user_posts (food_bank_id, content, date_made)
    VALUES (?, ?, ?)
    RETURNING *
  `;

    const result = await knex.raw(query, [food_bank_id, content, date_made]);

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

  static async find(id) {
    const query = `SELECT * FROM user_reviews WHERE id = ?`;
    const result = await knex.raw(query, [id]);
    const rawUserReviewData = result.rows[0];
    return rawUserReviewData ? new UserReview(rawUserReviewData) : null;
  }

  static async findByFoodbank(food_bank_id) {
    const query = `SELECT * FROM user_reviews WHERE food_bank_id = ?`;
    const result = await knex.raw(query, [food_bank_id]);
    const rawUserReviewData = result.rows[0];
    return rawUserReviewData ? new UserReview(rawUserReviewData) : null;
  }

  static async update(id, food_bank_id, content) {
    const query = `
      UPDATE user_reviews
      SET food_bank_id = ?
      SET content = ?
      WHERE id = ?
      RETURNING *
    `;

    const result = await knex.raw(query, [id, food_bank_id, content]);
    const rawUserReviewData = result.rows[0];
    return rawUserReviewData ? new UserReview(rawUserReviewData) : null;
  }

  static async deleteAll() {
    return knex("user_reviews").del();
  }
}

module.exports = UserReview;
