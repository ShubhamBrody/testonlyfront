const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true
  },
  contact: Number,
  address: String,
  number_of_devices: Number,
  smartPhone: Boolean,
  laptop: Boolean,
  tablet: Boolean,
  model: String,
  age: String,
  condition: String, 
});

module.exports = mongoose.model("Device", booksSchema, "GYCData-devices");
