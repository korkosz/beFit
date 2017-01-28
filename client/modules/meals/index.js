module.exports = angular.module('beFit.meals', [])
    .component('mealDetails', require('./details/details.component'))
    .component('mealList', require('./list/list.component'))
    .component('mealPickLList', require('./pick list/pick_list.component'));