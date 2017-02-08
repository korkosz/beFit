'use strict';

const express = require('express');
const route = express.Router();

const Product = require('./produt.model');

route.get('/', function(req, res) {
    const filters = req.query || {};

    if(filters.name) {
        filters.name = new RegExp(`${filters.name}`, 'i');
    }
    if(parseBool(filters.own)) {
        filters.owner = req.user.id;
    }
    delete filters.own;
    if(filters.attributes) {
        filters.attributes = {$all: filters.attributes};
    }
    Product.find(filters).lean()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

route.post('/', (req, res)=> {
    const product = req.body;
    Product.create(product)
        .then((result)=> {
            res.status(201).end();
        })
        .catch((err)=> {
            res.status(500).send(err);
        });
});

module.exports = route;

function parseBool(str) {
    if(str == null)
        return false;

    if(typeof str === 'boolean') {
        return (str === true);
    }

    if(typeof str === 'string') {
        if(str == "")
            return false;

        str = str.replace(/^\s+|\s+$/g, '');
        if(str.toLowerCase() == 'true' || str.toLowerCase() == 'yes')
            return true;

        str = str.replace(/,/g, '.');
        str = str.replace(/^\s*\-\s*/g, '-');
    }

    if(!isNaN(str))
        return (parseFloat(str) != 0);

    return false;
}