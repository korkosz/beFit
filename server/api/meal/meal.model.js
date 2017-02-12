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
        type: mongoose.Schema.Types.ObjectId,
    },
    calories: {
        type: Number,
        required: true
    },
    attributes: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model('meal', schema);