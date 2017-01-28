module.exports = angular.module('ct.modules', [])
    .component('productsList', require('./products list/products_list.component'))
    .component('productsListItem', require('./products list/products list item/products_list_item.component'))
    .component('newMealInline', require('./new meal inline/new_meal_inline.component'))
    .component('newMealModal', require('./new meal modal/new_meal_modal.component'))
    .component('shoppingSimpleList', require('./shopping simple list/shopping_simple_list.component.js'));