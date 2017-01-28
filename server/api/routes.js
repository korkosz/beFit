const express = require('express');
const router = express.Router();

router.use('/metadata', require('./metadata/metadata.routes'));

module.exports = router;