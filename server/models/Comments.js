/** @format */

const knex = require("../db/knex");

class Comment {
  constructor({ id, user_id, content, created_at }) {
    this.id = id;
    this.user_id = user_id;
    this.content = content;
    this.created_at = created_at;
  }

  static async create({ content, date_made }) {
    const query = `
    INSERT INTO user_posts (content, date_made)
    VALUES (?, ?)
    RETURNING *
  `;

    const result = await knex.raw(query, [content, date_made]);

    const rawCommentData = result.rows[0];
    return new Comment(rawCommentData);
  }

  static async list() {
    const query = `SELECT * FROM comments`;
    const result = await knex.raw(query);
    return result.rows.map((rawCommentData) => new Comment(rawCommentData));
  }

  static async find(id) {
    const query = `SELECT * FROM comments WHERE id = ?`;
    const result = await knex.raw(query, [id]);
    const rawCommentData = result.rows[0];
    return rawCommentData ? new Comment(rawCommentData) : null;
  }

  //NEEDS TO BE FIXED
  //   static async findByUsername(id) {
  //     const query = `SELECT * FROM comments WHERE id = ?`;
  //     const result = await knex.raw(query, [id]);
  //     const rawCommentData = result.rows[0];
  //     return rawCommentData ? new Comment(rawCommentData) : null;
  //   }

  static async update(id, content) {
    const query = `
      UPDATE comments
      SET content = ?
      WHERE id = ?
      RETURNING *
    `;

    const result = await knex.raw(query, [id, content]);
    const rawCommentData = result.rows[0];
    return rawCommentData ? new Comment(rawCommentData) : null;
  }

  static async deleteAll() {
    return knex("comments").del();
  }
}

module.exports = Comment;
