const express = require('express');

const helpers = require('./helpers');
const ctrl = require('./controller');

const router = express.Router();

router.post('/login', ctrl.logIn);
router.post('/register', ctrl.register);
router.get('/logout', ctrl.logout);
router.get('/user', helpers.isLoggedIn, ctrl.getUser);

module.exports = router;