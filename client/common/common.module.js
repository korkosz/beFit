const commonModule = angular.module('common', [
    require('./auth').name,
    require('./horizontal_calendar/horizontalCalendar').name
]);

commonModule
    .component('tripleContainer', require('./triple containter/triple_container.components'))
    .component('menu', require('./menu/menu'));

module.exports = commonModule;
