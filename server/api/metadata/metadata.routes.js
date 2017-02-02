const express = require('express');
const router = express.Router();

const Pickilist = require('./picklist.model');
const Version = require('./version.model');

router.get('/apiversion', function(req, res) {
    Version.findOne({})
        .then((result)=> {
            res.json(result.version);
        })
        .catch((err)=> {
            res.status(500).send(err);
        });
});

router.get('/picklist', function(req, res) {
    Pickilist.find({})
        .then((result)=> {
            res.send(result);
        })
        .catch((err)=> {
            res.status(500).send('Error !!!! ');
        });
});

module.exports = router;
