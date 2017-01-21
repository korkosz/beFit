const commonModule = angular.module('common', [
    require('./auth').name,
    require('./horizontal calendar').name
]);

commonModule
    .directive('ctList', require('./list/ct_list.directive.js'))
    .component('tripleContainer', require('./triple containter/triple_container.components'))
    .component('menu', require('./menu/menu'));

module.exports = commonModule;
