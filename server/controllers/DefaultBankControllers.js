/** @format */

const DefaultBank = require("../models/DefaultBanks");

exports.listBanks = async (req, res) => {
  const banks = await DefaultBank.list();
  res.send(banks);
};

exports.getBankById = async (req, res) => {
  const bank = await DefaultBank.find(req.params.id);
  if (!bank) return res.status(404).send({ message: "Food bank not found" });
  res.send(bank);
};

exports.serveCoordinates = async (req, res) => {
  const coords = await DefaultBank.getCoordinates();
  if (!coords || !coords.length) {
    return res.status(500).send({ message: "No coordinates found" });
  }

  const formatted = coords.map((bank) => ({
    geocode: [bank.latitude, bank.longitude],
    popUp: bank.name,
  }));

  res.send(formatted);
};

exports.createBank = async (req, res) => {
  const user_id = req.session.userId;

  if (!user_id) {
    return res.send({ message: "Unauthorized, please log in." });
  }

  const {
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
  } = req.body;

  if (
    !phone_number ||
    !type ||
    !food_bank_street ||
    !food_bank_borough ||
    !food_bank_zip ||
    !longitude ||
    !latitude ||
    !days_open ||
    !opening_hour ||
    !closing_hour
  ) {
    return res.status(400).send({
      message: "Missing data, please ensure all fields are populated.",
    });
  }

  console.log("userId: ", user_id);

  const foodbank = await DefaultBank.create({
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
  });
  res.send(foodbank);
};

exports.updateFoodBank = async (req, res) => {
  const currentUser = req.session.userId;
  const id = req.params.id;

  const foodBankToChange = await DefaultBank.find(id);

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
  const updated = await DefaultBank.update(
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
  const deleted = await DefaultBank.delete(req.params.id);
  if (!deleted) return res.status(404).send({ message: "Food bank not found" });
  res.send({ message: "Deleted" });
};
