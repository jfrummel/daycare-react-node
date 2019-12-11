const express = require("express");
const users = require("../routes/user");
const auth = require("../routes/auth");
const cors = require("cors");

module.exports = function(app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use("/api/users", users);
  app.use("/api/auth", auth);
};
