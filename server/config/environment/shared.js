'use strict';

const path = require('path');

module.exports = {
    rootDir: path.resolve(`${__dirname}/../../..`),
    port: process.env.PORT || 9000
};