const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    values: [{
        label: {
            type: String,
            required: true
        },
        subtypes: [{
            label: {
                type: String,
                required: true
            }
        }]
    }]
});

module.exports = mongoose.model('picklist', schema);