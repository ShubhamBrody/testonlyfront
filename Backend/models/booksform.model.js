const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true
  },
  contact: Number,
  genre: String,
  number_of_books: Number,
  condition: String,
});

module.exports = mongoose.model("Books", booksSchema, "GYCData-books");
