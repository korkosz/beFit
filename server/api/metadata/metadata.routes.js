const express = require('express');
const router = express.Router();

const pickilist = require('./picklist.model');

router.get('/version', function() {

});

router.get('/picklist', function(req, res) {
    pickilist.find({})
        .then((result)=> {
            res.send(result);
        })
        .catch((err)=> {
            res.status(500).send('Error !!!! ');
        });
});

module.exports = router;