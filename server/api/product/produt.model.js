const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        required: true
    },
    subcategory: ObjectId,
    attributes: [ObjectId],

    price: Number,
    priceType: ObjectId,
    priceUpdateDate: {
        type: Number,
        default() {
            if(this.isNew) {
                return (new Date()).valueOf();
            }
        }
    },

    /** Per 100g/100ml **/
    proteins: {
        type: Number,
        required: true
    },
    fats: {
        type: Number,
        required: true
    },
    carbs: {
        type: Number,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    /** ************* **/

    netWeight: Number,
    image: Buffer,
    owner: ObjectId,
    private: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('product', schema);