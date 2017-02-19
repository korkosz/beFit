const mongoose = require('mongoose');

//TODO: do zmiany required

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: mongoose.Schema.Types.ObjectId,
    subcategory: mongoose.Schema.Types.ObjectId,
    attributes: [mongoose.Schema.Types.ObjectId],

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

    /** Per 100g/100ml **/
    proteins: Number,
    fats: Number,
    carbs: Number,
    calories: {
        type: Number,
        required: true
    },
    /** ************* **/

    netWeight: Number,
    image: Buffer,
    owner: mongoose.Schema.Types.ObjectId,
    private: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('product', schema);