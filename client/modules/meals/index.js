module.exports = angular.module('beFit.meals', [])
    .component('mealList', require('./list/list.component'))
    .component('mealPickLList', require('./pick list/pick_list.component'));