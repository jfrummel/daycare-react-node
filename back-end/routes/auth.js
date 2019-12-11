const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Customer } = require("../models/customerModel");
const jwt = require("jsonwebtoken");
const config = require("config");

router.post("/", async (req, res) => {
  const user = await Customer.findOne({ username: req.body.username });
  if (!user) return res.status(404).send("Invalid username and/or password");

  const validPassword = bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(404).send("Invalid username and/or password");

  const token = jwt.sign(
    { _id: user._id, username: user.username, isAdmin: user.isAdmin },
    config.get("jwtPrivateKey")
  );
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(token);
});

module.exports = router;
