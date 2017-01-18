'use strict';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const passport = require('passport');
const config = require('./environment');

module.exports = function (app) {
    //configure and connect to db
    require('./db');

    //configure authentication
    require('../auth/config')(passport);

    //use authentication
    app.use(passport.initialize());
    app.use(passport.session());

    if (process.env.NODE_ENV !== 'production') {
        app.use(logger('dev'));
    }

    app.use(express.static(path.join(config.rootDir, 'client')));
};