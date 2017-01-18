var Account = require('./model');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
    const strategyConfig = {
        usernameField: 'email'
    };
    const verifyCallback = Account.authenticate();

    passport.use(new LocalStrategy(strategyConfig, verifyCallback));
    passport.serializeUser(Account.serializeUser());
    passport.deserializeUser(Account.deserializeUser());
};