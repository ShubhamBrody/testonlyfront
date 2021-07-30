const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true
  },
  contact: Number,
  amount: Number,
});

module.exports = mongoose.model("Fund", booksSchema, "GYCData-funds");
