'use strict';

const express = require('express');
const router = express.Router();
const Meal = require('./meal.model.js');

router.delete('/:id', function(req, res) {
    Meal.findOneAndRemove({_id: req.params.id})
        .then(()=> {
            res.status(204).send();
        })
        .catch((err)=> {
            res.status(500).send(err);
        });
})
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
    if(filters.caloriesFrom) {
        filters.calories = {
            $gte: filters.caloriesFrom
        };
        delete filters.caloriesFrom;
    }
    if(filters.caloriesTo) {
        if(!filters.calories) {
            filters.calories = {};
        }
        filters.calories.$lte = filters.caloriesTo;

        delete filters.caloriesTo;
    }

    //TODO: exclude nie jest generyczne
    Meal.find(filters).select({'ingredients': 0}).lean()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

router.get('/:id', function(req, res) {
    const id = req.params.id;

    Meal.findById(id).populate('ingredients.product', 'name').lean()
        .then((result)=> {
            res.send(result);
        })
        .catch((err)=> {
            res.status(500).send(err);
        });
});

router.post('/', function() {
  //TODO: narazie dac tutaj update calories jako sume calories produktow powiazanych z tym posilkiem
    //przechowujemy w bazie osobno sume calories bo nie chcemy tego obliczac za kazdym razem - czesciej
    //bedzie czytane niz zapisywane - wydajnosc
});

module.exports = router;