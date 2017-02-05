module.exports = angular.module('beFit.products', [])
    .factory('productsFactory', require('./products.factory'))
    .component('productModalNew', require('./modal new/modal_new.component'))
    .component('productList', require('./list/list.component'))
    .component('productListItem', require('./list/list item/list_item.component'));