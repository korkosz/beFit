'use strict';

const express = require('express');
const router = express.Router();
const Meal = require('./meal.module');

router.get('/', function(req, res) {
    Meal.find({}).lean()
        .then((result)=> {
            res.json(result);
        })
        .catch((err)=> {
            res.status(500).send(err);
        });
});

module.exports = router;