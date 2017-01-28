const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    version: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('apiversion', schema);