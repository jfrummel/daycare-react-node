const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Customer } = require("../models/customerModel");
const router = express.Router();

router.post("/", async (req, res) => {
  const userExists = await Customer.findOne({ username: req.body.username });
  if (userExists) return res.status(400).send("Username already exists");

  const newUser = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    accountNumber: req.body.accountNumber,
    currentBalance: req.body.currentBalance,
    dailyRate: req.body.dailyRate,
    username: req.body.username,
    password: req.body.password,
    isAdmin: req.body.isAdmin
  });
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);
  await newUser.save();
  res.send(newUser);
});

module.exports = router;
