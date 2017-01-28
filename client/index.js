const angular = require('angular');

const app = angular.module('beFit', [
    require('angular-ui-router').default,
    require('./common').name,
    require('./views').name,
    require('./modules/meals').name,
    require('./modules/products').name,
    require('./libs/ct').name
]);

//authentication config
app.run(require('./common/auth/auth.states.config'));

module.exports = app;
