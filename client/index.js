const angular = require('angular');

const app = angular.module('beFit', [
    require('angular-ui-router').default,
    require('./common').name,
    require('./views').name,
    require('./modules/meals').name,
    require('./modules/products').name,
    require('./libs/ct').name,
    require('ng-file-upload')
]);

//authentication config
app.run(require('./common/auth/auth.states.config'));
app.run((metadataFactory)=> {
    metadataFactory.initMetadata();
})
module.exports = app;
