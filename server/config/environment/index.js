'use strict';

module.exports = Object.assign(
    {},
    require('./shared'),
    require(`./${process.env.NODE_ENV}`)
);