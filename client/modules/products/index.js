module.exports = angular.module('beFit.products', [])
    .factory('productsFactory', require('./products.factory'))
    .component('productList', require('./list/list.component'))
    .component('productListItem', require('./list/list item/list_item.component'));