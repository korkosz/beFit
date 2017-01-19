const angular = require('angular');

const app = angular.module('beFit', [
    require('angular-ui-router').default,
    require('./common').name,
    require('./components').name,
    require('./views').name
]);

//authentication config
app.run(require('./common/auth/auth.states.config'));

module.exports = app;
