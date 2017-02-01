const express = require('express');
const router = express.Router();

router.use('/metadata', require('./metadata/metadata.routes'));
router.use('/meals', require('./meal/meal.routes'));
router.use('/products', require('./product/product.routes'));

module.exports = router;