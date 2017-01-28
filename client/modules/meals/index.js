module.exports = angular.module('beFit.meals', [])
    .component('mealModalNew', require('./modal new/modal_new.component'))
    .component('mealInlineNew', require('./inline new/inline_new.component'))
    .component('mealDetails', require('./details/details.component'))
    .component('mealList', require('./list/list.component'))
    .component('mealPickLList', require('./pick list/pick_list.component'));