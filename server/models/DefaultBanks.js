/** @format */

const knex = require("../db/knex");

class DefaultBank {
  constructor({
    id,
    name,
    phone_number,
    type,
    food_bank_street,
    food_bank_borough,
    food_bank_zip,
    longitude,
    latitude,
    days_open,
    opening_hour,
    closing_hour,
  }) {
    this.id = id;
    this.name = name;
    this.phone_number = phone_number;
    this.type = type;
    this.food_bank_street = food_bank_street;
    this.food_bank_borough = food_bank_borough;
    this.food_bank_zip = food_bank_zip;
    this.longitude = longitude;
    this.latitude = latitude;
    this.days_open = days_open;
    this.opening_hour = opening_hour;
    this.closing_hour = closing_hour;
  }

  static async create({
    name,
    phone_number,
    type,
    food_bank_street,
    food_bank_borough,
    food_bank_zip,
    longitude,
    latitude,
    days_open,
    opening_hour,
    closing_hour,
  }) {
    const query = `
    INSERT INTO food_banks (name, phone_number, type, food_bank_street, food_bank_borough, food_bank_zip, longitude, latitude, days_open, opening_hour, closing_hour)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    RETURNING *
  `;

    const result = await knex.raw(query, [
      name,
      phone_number,
      type,
      food_bank_street,
      food_bank_borough,
      food_bank_zip,
      longitude,
      latitude,
      days_open,
      opening_hour,
      closing_hour,
    ]);

    const rawFoodBankData = result.rows[0];
    return new DefaultBank(rawFoodBankData);
  }

  //CHANGE THIS TO LIST BY BOROUGH
  static async list() {
    const query = `SELECT * FROM map_food_bank_locations`;
    const result = await knex.raw(query);
    return result.rows.map(
      (rawFoodBankData) => new DefaultBank(rawFoodBankData)
    );
  }

  //Ways you can find a food bank
  //needs findByZipcode, findByLocation

  static async find(id) {
    const query = `SELECT * FROM map_food_bank_locations WHERE id = ?`;
    const result = await knex.raw(query, [id]);
    const rawFoodBankData = result.rows[0];
    return rawFoodBankData ? new DefaultBank(rawFoodBankData) : null;
  }

  static async findByName(name) {
    const query = `SELECT * FROM map_food_bank_locations WHERE name = ?`;
    const result = await knex.raw(query, [name]);
    const rawFoodBankData = result.rows[0];
    return rawFoodBankData ? new DefaultBank(rawFoodBankData) : null;
  }

  //serve all coordinates
  static async getCoordinates() {
    const query = `SELECT latitude, longitude FROM map_food_bank_locations`;
    const result = await knex.raw(query);
    return result.rows;
  }

  //   static async findByUser(sessionId) {
  //     const query = `SELECT * FROM map_food_bank_locations WHERE user_id = ?`;
  //     const result = await knex.raw(query, [sessionId]);
  //     const rawFoodBankData = result.rows[0];
  //     return rawFoodBankData ? new DefaultBank(rawFoodBankData) : null;
  //   }

  static async filterByAddress(food_bank_street, borough, zipcode) {
    // const query = `SELECT * FROM food_banks WHERE location = ?`;
    const query = `SELECT * FROM map_food_bank_locations WHERE street = ? AND borough =  ? AND zipcode = ?`;
    const result = await knex.raw(query, [food_bank_street, borough, zipcode]);
    const rawFoodBankData = result.rows[0];
    return rawFoodBankData ? new DefaultBank(rawFoodBankData) : null;
  }

  static async update(
    id,
    name,
    phone_number,
    type,
    food_bank_street,
    food_bank_borough,
    food_bank_zip,
    longitude,
    latitude,
    days_open,
    opening_hour,
    closing_hour
  ) {
    const query = `
      UPDATE map_food_bank_locations
      SET name = ?,
      phone_number = ?,
      type = ?,
      food_bank_street = ?,
      food_bank_borough = ?,
      food_bank_zip = ?,
      longitude = ?,
      latitude = ?,
      days_open = ?,
      opening_hour = ?,
      closing_hour = ?
      WHERE id = ?
      RETURNING *
    `;

    const result = await knex.raw(query, [
      name,
      phone_number,
      type,
      food_bank_street,
      food_bank_borough,
      food_bank_zip,
      longitude,
      latitude,
      days_open,
      opening_hour,
      closing_hour,
      id,
    ]);
    const rawUpdatedFoodBank = result.rows[0];
    return rawUpdatedFoodBank ? new DefaultBank(rawUpdatedFoodBank) : null;
  }

  static async delete(id) {
    const query = `
        DELETE FROM map_food_bank_locations
        WHERE id = ?
        RETURNING *
      `;
    const result = await knex.raw(query, [id]);
    const deleted = result.rows[0];
    return deleted ? new DefaultBank(deleted) : null;
  }

  static async deleteAll() {
    return knex("map_food_bank_locations").del();
  }
}

module.exports = DefaultBank;
