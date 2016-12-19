'use strict';

module.exports = function (mongoose) {
    mongoose.Promise = global.Promise;

    //connect to db
    const url = require('./environment');
    mongoose.connect(url);
};