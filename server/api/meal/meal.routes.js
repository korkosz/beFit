'use strict';

const express = require('express');
const router = express.Router();
const Meal = require('./meal.model.js');

router.get('/', function(req, res) {
    const filters = req.query || {};

    if(filters.name) {
        filters.name = new RegExp(`${filters.name}`, 'i');
    }
    if(filters.attributes) {
        filters.attributes = {$all: filters.attributes};
    }
    if(filters.time) {
        filters.time = {
            $in: filters.time
        };
    }
    Meal.find(filters).lean()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

module.exports = router;