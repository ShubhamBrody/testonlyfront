const mongoose = require('mongoose');

const teamCarouselSchema = new mongoose.Schema({
    uri: String,
    name: String,
    designation: String
});

module.exports = mongoose.model('Team', teamCarouselSchema, 'GYCData');