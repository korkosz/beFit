'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

//Configure App
require('./config/express')(app);

//Start App
app.listen(PORT, ()=> {
    console.log(`Server Started on port: ${PORT}`);
});

module.exports = app;