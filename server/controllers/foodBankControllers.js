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
  const newBank = await FoodBank.create(req.body);
  res.status(201).send(newBank);
};

exports.updateFoodBank = async (req, res) => {
  const updated = await FoodBank.update(req.params.id, req.body);
  if (!updated) return res.status(404).send({ message: "Food bank not found" });
  res.send(updated);
};

exports.deleteFoodBank = async (req, res) => {
  const deleted = await FoodBank.delete(req.params.id);
  if (!deleted) return res.status(404).send({ message: "Food bank not found" });
  res.send({ message: "Deleted" });
};
