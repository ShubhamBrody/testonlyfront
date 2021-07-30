const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    header: String,
    date: String,
    news: String,
});


module.exports = mongoose.model('News', newsSchema, 'GYCData-news');