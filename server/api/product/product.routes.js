'use strict';

const express = require('express');
const route = express.Router();

const Product = require('./produt.model');

route.get('/:filters?', function(req, res) {
    //const filters = JSON.parse(req.params.filters) || {};
    Product.find({}).lean()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

module.exports = route;
