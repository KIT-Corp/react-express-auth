/** @format */

const knex = require("../db/knex");

class FoodBankPost {
  constructor({ id, food_bank_id, content }) {
    this.id = id;
    this.food_bank_id = food_bank_id;
    this.content = content;
  }

  static async create({ food_bank_id, content }) {
    const query = `
    INSERT INTO food_bank_posts ( food_bank_id, content )
    VALUES (?, ?)
    RETURNING *
  `;
    const result = await knex.raw(query, [food_bank_id, content]);
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

  static async update(id, content) {
    const query = `
      UPDATE food_bank_posts
      SET content = ?
      WHERE id = ?
      RETURNING *
    `;

    const result = await knex.raw(query, [content, id]);
    const rawFoodBankPostData = result.rows[0];
    return rawFoodBankPostData ? new FoodBankPost(rawFoodBankPostData) : null;
  }

  //delete a single post
  static async delete(id) {
    const query = `
    DELETE FROM food_bank_posts
    WHERE id = ?
    RETURNING *
    `;
    const result = await knex.raw(query, [id]);
    const deletedPost = result.rows[0];
    return deletedPost ? new FoodBankPost(deletedPost) : null;
  }

  //delete all posts
  static async deleteAll() {
    return knex("foodbank_posts").del();
  }
}

module.exports = FoodBankPost;
