/** @format */

const knex = require("../db/knex");

class FoodBank {
  //   #passwordHash = null; // a private property

  // Create a User instance with the password hidden
  // Instances of User can be sent to clients without exposing the password
  constructor({
    id,
    user_id,
    name,
    foodbank_street,
    foodbank_borough,
    foodbank_zipcode,
    type,
    phone_number,
  }) {
    this.id = id;
    this.user_id = user_id;
    this.name = name;
    this.foodbank_street = foodbank_street;
    this.foodbank_borough = foodbank_borough;
    this.foodbank_zipcode = foodbank_zipcode;
    this.type = type;
    this.phone_number = phone_number;
  }

  static async create({
    name,
    foodbank_street,
    foodbank_borough,
    foodbank_zipcode,
    type,
    phone_number,
  }) {
    const query = `
    INSERT INTO food_bank (name, foodbank_street, foodbank_borough, foodbank_zipcode, type, phone_number)
    VALUES (?, ?, ?, ?, ?, ?)
    RETURNING *
  `;

    const result = await knex.raw(query, [
      name,
      foodbank_street,
      foodbank_borough,
      foodbank_zipcode,
      type,
      phone_number,
    ]);

    const rawFoodBankData = result.rows[0];
    return new FoodBank(rawFoodBankData);
  }

  //CHANGE THIS TO LIST BY BOROUGH
  static async list() {
    const query = `SELECT * FROM food_banks`;
    const result = await knex.raw(query);
    return result.rows.map((rawFoodBankData) => new FoodBank(rawFoodBankData));
  }

  //Ways you can find a food bank
  //needs findByZipcode, findByLocation

  static async find(id) {
    const query = `SELECT * FROM food_banks WHERE id = ?`;
    const result = await knex.raw(query, [id]);
    const rawFoodBankData = result.rows[0];
    return rawFoodBankData ? new FoodBank(rawFoodBankData) : null;
  }

  static async findByName(name) {
    const query = `SELECT * FROM food_banks WHERE name = ?`;
    const result = await knex.raw(query, [name]);
    const rawFoodBankData = result.rows[0];
    return rawFoodBankData ? new FoodBank(rawFoodBankData) : null;
  }

  static async filterByAddress(foodbank_street, borough, zipcode) {
    // const query = `SELECT * FROM food_banks WHERE location = ?`;
    const query = `SELECT * FROM food_banks WHERE street = ? AND borough =  ? AND zipcode = ?`;
    const result = await knex.raw(query, [foodbank_street, borough, zipcode]);
    const rawFoodBankData = result.rows[0];
    return rawFoodBankData ? new FoodBank(rawFoodBankData) : null;
  }

  static async update(
    id,
    name,
    foodbank_street,
    foodbank_borough,
    foodbank_zipcode,
    type,
    phone_number
  ) {
    const query = `
      UPDATE food_banks
      SET name = ?
      SET foodbank_street = ?
      SET foodbank_borough = ?
      SET foodbank_zipcode = ?
      SET type = ?
      SET phone_number = ?
      WHERE id = ?
      RETURNING *
    `;

    const result = await knex.raw(query, [
      name,
      id,
      foodbank_street,
      foodbank_borough,
      foodbank_zipcode,
      type,
      phone_number,
    ]);
    const rawUpdatedFoodBank = result.rows[0];
    return rawUpdatedFoodBank ? new FoodBank(rawUpdatedFoodBank) : null;
  }

  static async deleteAll() {
    return knex("food_banks").del();
  }
}

module.exports = FoodBank;
