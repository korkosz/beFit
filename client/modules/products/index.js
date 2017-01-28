module.exports = angular.module('beFit.products', [])
    .component('productList', require('./list/list.component'))
    .component('productListItem', require('./list/list item/list_item.component'));