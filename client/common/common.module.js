const commonModule = angular.module('common', [
    require('./auth').name
]);

commonModule
    .component('menu', require('./menu/menu'));

module.exports = commonModule;
