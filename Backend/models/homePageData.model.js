const mongoose = require('mongoose');

const homePageSchema = new mongoose.Schema({
    aboutUs: String,
    mission: String,
    vision: String,
    history: String,
    videoOne: String, // initial video just below the header.
    Department: String,
    team: Object, //image and names.
    news: Object, // monthYear and the actual news.
    videoTwo: String // testimonal video url.
});

module.export = mongoose.model('HomeData', homePageSchema);