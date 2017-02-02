const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    priceType: String,
    priceUpdateDate: Number,
    proteins: Number,
    fats: Number,
    carbs: Number,
    image: Buffer,
    owner: mongoose.Schema.Types.ObjectId,
    category: mongoose.Schema.Types.ObjectId,
    subcategory: mongoose.Schema.Types.ObjectId,
    attributes: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model('product', schema);