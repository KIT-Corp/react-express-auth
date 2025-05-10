/** @format */

const knex = require("../db/knex");

class UserFoodBankPostLikes {
  constructor({ id, user_id, food_bank_post_id, user_post_id, liked_at }) {
    this.id = id;
    this.user_id = user_id;
    this.food_bank_post_id = food_bank_post_id;
    this.user_post_id = user_post_id;
    this.liked_at = liked_at;
  }

  static async create({ food_bank_post_id, content, liked_at }) {
    const query = `
    INSERT INTO user_posts (food_bank_post_id, content, liked_at)
    VALUES (?, ?, ?)
    RETURNING *
  `;

    const result = await knex.raw(query, [
      food_bank_post_id,
      content,
      liked_at,
    ]);

    const rawUserFoodBankPostLikesData = result.rows[0];
    return new UserFoodBankPostLikes(rawUserFoodBankPostLikesData);
  }

  static async list() {
    const query = `user_food_bank_post_likes`;
    const result = await knex.raw(query);
    return result.rows.map(
      (rawUserFoodBankPostLikesData) =>
        new UserFoodBankPostLikes(rawUserFoodBankPostLikesData)
    );
  }

  static async find(id) {
    const query = `SELECT * FROM user_food_bank_post_likes  WHERE id = ?`;
    const result = await knex.raw(query, [id]);
    const rawUserFoodBankPostLikesData = result.rows[0];
    return rawUserFoodBankPostLikesData
      ? new UserFoodBankPostLikes(rawUserFoodBankPostLikesData)
      : null;
  }

  static async removeLike(id, content) {
    const query = `
    DELETE FROM user_food_bank_post_likes
    WHERE id = ?
    RETURNING *`;
    const result = await knex.raw(query, [id, content]);
    const rawUserFoodBankPostLikesData = result.rows[0];
    return rawUserFoodBankPostLikesData
      ? new UserFoodBankPostLikes(rawUserFoodBankPostLikesData)
      : null;
  }

  static async deleteAll() {
    return knex("user_food_bank_post_likes").del();
  }
}

module.exports = UserFoodBankPostLikes;
