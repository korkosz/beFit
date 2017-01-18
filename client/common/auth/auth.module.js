module.exports = angular.module('auth', [])
    .service('auth', require('./auth.service'))
    .component('login', require('./login/login.component'))
    .config(require('./auth.states'));