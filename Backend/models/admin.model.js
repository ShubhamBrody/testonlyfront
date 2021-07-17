const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
    securitykey: String,
});


module.exports = mongoose.model('Admin', adminSchema, 'GYCData-admin');