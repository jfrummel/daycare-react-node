const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
    minlength: 8,
    maxlength: 30,
    required: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports.User = User;
module.exports.userSchema = userSchema;
