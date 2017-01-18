const passport = require('passport');
const Account = require('./model');

const logIn = passport.authenticate('local', {failureRedirect: '/login'});

const register = function (req, res, next) {
    const newAccount = new Account({email: req.body.email});

    Account.register(newAccount, req.body.password, function (err, _account) { //eslint-disable-line
        if (err) {
            res.status(400).send();
        }
    });
};

const logout = function (req, res) {
    req.logout();
    res.redirect('/');
};

module.exports = {
    logIn,
    register,
    logout
};

