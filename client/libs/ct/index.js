module.exports = angular.module('ct', [])
    .component('ctSelect', require('./ct select/ct_select.component'))
    .component('ctPill', require('./ct pill/ct_pill.component'))
    .component('ctPillGroup', require('./ct pill group/ct_pill_group.component'))
    .component('ctCheckbox', require('./ct checkbox/ct_checkbox.component'));