const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

const AccountSchema = new mongoose.Schema({
    email: String,
    password: String
});

AccountSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
});

module.exports = mongoose.model('Account', AccountSchema);
