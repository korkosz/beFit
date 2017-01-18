const angular = require('angular');

const app = angular.module('beFit', [
    require('angular-ui-router').default,
    require('./common').name
]);

//states
app.config(require('./views/states'));

//authentication config
app.run(require('./common/auth/auth.states.config'));

module.exports = app;
