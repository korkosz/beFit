module.exports = angular.module('beFit.meals', [])
    .factory('mealsFactory', require('./meals.factory'))
    .component('mealModalNew', require('./modal new/modal_new.component'))
    .component('mealIngredients', require('./ingredients/ingredients.component.js'))
    .component('mealDetails', require('./details/details.component'))
    .component('mealList', require('./list/list.component'))
    .component('mealModalDelete', require('./list/modal delete/modal_delete.component'))
    .component('mealListItem', require('./list/list item/list_item.component'));