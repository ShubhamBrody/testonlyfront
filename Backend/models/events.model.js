const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    heading: String,
    content: String,
    image: {
        data: Buffer,
        contentType: String,
        default: 'logo_old.png'
    }

});


module.exports = mongoose.model('Events', adminSchema, 'GYCData-events');