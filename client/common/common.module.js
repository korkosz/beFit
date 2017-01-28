const commonModule = angular.module('common', [
    require('./auth').name,
    require('./modal/modal').name,
    require('./horizontal calendar').name
]);

commonModule
    .directive('bootstrapModal', require('./bootstrap modal/bootstrap_modal.directive'))
    .directive('ctList', require('./list/ct_list.directive.js'))
    .component('ctPillGroup', require('./ct pill group/ct_pill_group.component'))
    .component('ctPill', require('./ct pill/ct_pill.component'))
    .component('ctSelect', require('./ct select/ct_select.component'))
    .component('tripleContainer', require('./triple containter/triple_container.components'))
    .component('menu', require('./menu/menu'));

module.exports = commonModule;
