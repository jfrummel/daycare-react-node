const mongoose = require("mongoose");

module.exports = function() {
  mongoose
    .connect("mongodb://localhost:27017/rummel-daycare", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    })
    .then(() => console.log("Connected to MongoDB"));
};
