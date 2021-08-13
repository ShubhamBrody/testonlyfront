const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    imagename: String,
    title: String,
    description: String,
});


module.exports = mongoose.model('Events', adminSchema, 'GYCData-events');