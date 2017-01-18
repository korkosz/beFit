const express = require('express');
const ctrl = require('./controller');

const router = express.Router();

router.post('/login', ctrl.logIn);
router.post('/register', ctrl.register);
router.get('/logout', ctrl.logout);

module.exports = router;