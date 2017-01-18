const passport = require('passport');
const Account = require('./model');

const logIn = [
    passport.authenticate('local'),
    function (req, res) {
        //TODO nie wysylaj calego obiektu - usun wrazliwe pola
        res.json(req.user);
    }];

const register = function (req, res) {
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

const getUser = function (req, res) {
    //TODO nie wysylaj calego obiektu - usun wrazliwe pola
    res.json(req.user);
};

module.exports = {
    logIn,
    register,
    logout,
    getUser
};

