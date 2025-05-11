/** @format */

const knex = require("../db/knex");

class FoodBankPost {
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

    const rawFoodBankPostData = result.rows[0];
    return new FoodBankPost(rawFoodBankPostData);
  }

  static async list() {
    const query = `SELECT * FROM food_bank_posts`;
    const result = await knex.raw(query);
    return result.rows.map(
      (rawFoodBankPostData) => new FoodBankPost(rawFoodBankPostData)
    );
  }

  static async find(id) {
    const query = `SELECT * FROM food_bank_posts WHERE id = ?`;
    const result = await knex.raw(query, [id]);
    const rawFoodBankPostData = result.rows[0];
    return rawFoodBankPostData ? new FoodBankPost(rawFoodBankPostData) : null;
  }

  static async update(id, foodbank_id, content) {
    const query = `
      UPDATE foodbank_posts
      SET content = ?
      WHERE id = ?
      RETURNING *
    `;

    const result = await knex.raw(query, [id, foodbank_id, content]);
    const rawFoodBankPostData = result.rows[0];
    return rawFoodBankPostData ? new FoodBankPost(rawFoodBankPostData) : null;
  }

  static async deleteAll() {
    return knex("foodbank_posts").del();
  }
}

module.exports = FoodBankPost;
