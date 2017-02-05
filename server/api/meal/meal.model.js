const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    time: {
        type: Number
    },
    calories: {
        type: Number,
        required: true
    },
    attributes: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model('meal', schema);