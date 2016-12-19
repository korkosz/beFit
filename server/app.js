'use strict';

const express = require('express');
const app = express();

const config = require('./config/environment');

//Configure App
require('./config/express')(app);

//Start App
app.listen(config.port, ()=> {
    console.log(`Server Started on port: ${config.port}`);
});

module.exports = app;