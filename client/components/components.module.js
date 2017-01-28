module.exports = angular.module('ct.modules', [])
    .component('productsList', require('./products list/products_list.component'))
    .component('productsListItem', require('./products list/products list item/products_list_item.component'))
    .component('shoppingSimpleList', require('./shopping simple list/shopping_simple_list.component.js'));