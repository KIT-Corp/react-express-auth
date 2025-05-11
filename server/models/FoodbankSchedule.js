/** @format */

const knex = require("../db/knex");

class FoodBankSchedule {
  constructor({
    id,
    foodbank_id,
    firstDayOpen,
    lastDayOpen,
    openingHour,
    closingHour,
  }) {
    this.id = id;
    this.foodbank_id = foodbank_id;
    this.firstDayOpen = firstDayOpen;
    this.lastDayOpen = lastDayOpen;
    this.openingHour = openingHour;
    this.closingHour = closingHour;
  }

  static async create({ firstDayOpen, lastDayOpen, openingHour, closingHour }) {
    const query = `
    INSERT INTO food_bank (fisrtDayOpen, lastDayOpen, openingHour, closingHour)
    VALUES (?, ?, ?, ?)
    RETURNING *
  `;

    const result = await knex.raw(query, [
      firstDayOpen,
      lastDayOpen,
      openingHour,
      closingHour,
    ]);

    const rawFoodBankData = result.rows[0];
    return new FoodBank(rawFoodBankData);
  }

  static async list() {
    const query = `SELECT * FROM food_bank_schedules`;
    const result = await knex.raw(query);
    return result.rows.map((rawFoodBankData) => new FoodBank(rawFoodBankData));
  }

  //Ways you can find a food bank
  //needs findByZipcode, findByLocation

  static async find(id) {
    const query = `SELECT * FROM food_bank_schedules WHERE id = ?`;
    const result = await knex.raw(query, [id]);
    const rawFoodBankData = result.rows[0];
    return rawFoodBankData ? new FoodBank(rawFoodBankData) : null;
  }

  //WOULD HAVE TO JOIN WITH FOOD BANK TABLE
  static async findByName(name) {
    const query = `SELECT * 
    FROM food_banks 
	JOIN food_bank_schedules ON food_banks = food_banks.id
    WHERE food_banks.name = ?`;
    const result = await knex.raw(query, [name]);
    const rawFoodBankData = result.rows[0];
    return rawFoodBankData ? new FoodBank(rawFoodBankData) : null;
  }

  //WOULD HAVE TO JOIN WITH FOOD BANK TABLE
  static async filterByAddress(foodbank_street, borough, zipcode) {
    const query = `SELECT *
    FROM food_banks
    JOIN food_bank_schedules ON food_banks = food_banks.id
    WHERE food_banks.foodbank_street = ? AND food_banks.foodbank_borough = ? AND food_banks.foodbank_zipcode = ?`;
    const result = await knex.raw(query, [foodbank_street, borough, zipcode]);
    const rawFoodBankData = result.rows[0];
    return rawFoodBankData ? new FoodBank(rawFoodBankData) : null;
  }

  static async update(
    id,
    name,
    foodbank_street,
    foodbank_borough,
    last_dayOpen,
    openingHour,
    closingHour
  ) {
    const query = `
      UPDATE food_banks
      SET name = ?
      SET foodbank_street = ?
      SET foodbank_borough = ?
      SET last_dayOpen = ?
      SET openingHour = ?
      SET closingHour = ?
      WHERE id = ?
      RETURNING *
    `;

    const result = await knex.raw(query, [
      name,
      id,
      foodbank_street,
      foodbank_borough,
      last_dayOpen,
      openingHour,
      closingHour,
    ]);
    const rawUpdatedFoodBank = result.rows[0];
    return rawUpdatedFoodBank ? new FoodBank(rawUpdatedFoodBank) : null;
  }

  static async deleteAll() {
    return knex("food_banks").del();
  }
}

module.exports = FoodBank;
