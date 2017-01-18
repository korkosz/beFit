const angular = require('angular');

const app = angular.module('beFit', [
    require('angular-ui-router').default,
    require('./common').name
]);

//routing
app.config(require('./views/states'));

module.exports = app;
