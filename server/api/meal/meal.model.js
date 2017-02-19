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
    attributes: [mongoose.Schema.Types.ObjectId],
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
        amount: Number,
        proteins: Number,
        fats: Number,
        carbs: Number,
        calories: {
            type: Number,
            required: true
        }
    }]
});

module.exports = mongoose.model('meal', schema);