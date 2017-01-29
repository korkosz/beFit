'use strict';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const passport = require('passport');
const config = require('./environment');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

module.exports = function (app) {
    //configure and connect to db
    require('./db');

    //configure authentication
    require('../auth/config')(passport);

    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true
    }));

    //use authentication
    app.use(passport.initialize());
    app.use(passport.session());

    if (process.env.NODE_ENV !== 'production') {
        //app.use(logger('dev'));

        //seed
        require('./seed/seed');
    }

    app.use(express.static(path.join(config.rootDir, 'client')));
};