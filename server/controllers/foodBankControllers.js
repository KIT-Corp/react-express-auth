/** @format */

const FoodBank = require("../models/Foodbank");

exports.listFoodBanks = async (req, res) => {
  const banks = await FoodBank.list();
  res.send(banks);
};

exports.getFoodBank = async (req, res) => {
  const bank = await FoodBank.find(req.params.id);
  if (!bank) return res.status(404).send({ message: "Food bank not found" });
  res.send(bank);
};

exports.createFoodBank = async (req, res) => {
  const user_id = req.session.userId;

  if (!user_id) {
    return res.send({ message: "Unauthorized, please log in." });
  }

  if (!req.body) {
    return res.status(400).send({ message: "All fields are required!" });
  }
  const {
    name,
    food_bank_street,
    food_bank_borough,
    food_bank_zip,
    type,
    phone_number,
  } = req.body;

  if (
    !name ||
    !food_bank_street ||
    !food_bank_borough ||
    !food_bank_zip ||
    !type ||
    !phone_number
  ) {
    return res.status(400).send({
      message: "Missing data, please ensure all fields are populated.",
    });
  }

  console.log("userId: ", user_id);

  const foodbank = await FoodBank.create({
    user_id,
    name,
    food_bank_street,
    food_bank_borough,
    food_bank_zip,
    type,
    phone_number,
  });
  res.send(foodbank);
};

exports.updateFoodBank = async (req, res) => {
  const currentUser = req.session.userId;
  const id = req.params.id;

  const foodBankToChange = await FoodBank.find(id);

  if (currentUser !== foodBankToChange.user_id) {
    return res.status(403).send({
      message:
        "Unauthorized, you can only edit the foodbank created from this account.",
    });
  }

  const {
    name,
    food_bank_street,
    food_bank_borough,
    food_bank_zip,
    type,
    phone_number,
  } = req.body;
  const updated = await FoodBank.update(
    name,
    food_bank_street,
    food_bank_borough,
    food_bank_zip,
    type,
    phone_number,
    id
  );
  if (!updated) return res.status(404).send({ message: "Food bank not found" });
  res.send(updated);
};

exports.deleteFoodBank = async (req, res) => {
  const deleted = await FoodBank.delete(req.params.id);
  if (!deleted) return res.status(404).send({ message: "Food bank not found" });
  res.send({ message: "Deleted" });
};
