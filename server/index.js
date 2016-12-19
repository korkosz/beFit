'use strict';

const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const config = require('./config/environment');

const app = express();

console.log(config.rootDir);

app.use(express.static(path.join('../', __dirname, 'client')));

app.listen(PORT, ()=> {
    console.log(`Server Started on port: ${PORT}`);
});