'use strict';

const path = require('path');

const all = {
    rootDir: path.resolve(`${__dirname}/../../..`),
    port: process.env.PORT || 9000
};

module.exports = Object.assign(
    {},
    all,
    require(`./${process.env.NODE_ENV}`)
);