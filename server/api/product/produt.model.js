const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    priceType: mongoose.Schema.Types.ObjectId,
    priceUpdateDate: {
        type: Number,
        default() {
            if(this.isNew) {
                return (new Date()).valueOf();
            }
        }
    },
    proteins: Number,
    fats: Number,
    carbs: Number,
    image: Buffer,
    owner: mongoose.Schema.Types.ObjectId,
    category: mongoose.Schema.Types.ObjectId,
    subcategory: mongoose.Schema.Types.ObjectId,
    attributes: [mongoose.Schema.Types.ObjectId],
    private: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('product', schema);