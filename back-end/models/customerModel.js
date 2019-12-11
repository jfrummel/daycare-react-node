const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxLength: 100
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 100
  },
  accountNumber: {
    type: Number,
    minlength: 4,
    maxLength: 15,
    required: true,
    unique: true
  },
  currentBalance: {
    type: Number
  },
  dailyRate: Number,
  username: {
    type: String,
    minLength: 5,
    maxLength: 30,
    email: true,
    require: true,
    unique: true
  },
  password: {
    type: String,
    minlength: 5,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
});

const Customer = mongoose.model("Customer", customerSchema);

exports.Customer = Customer;
