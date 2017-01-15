'use strict';

const mongoose = require('mongoose');
const url = require('./environment').mongoURL;

mongoose.Promise = global.Promise;

//connect to db
mongoose.connect(url);
