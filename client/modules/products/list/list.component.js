module.exports = {
    templateUrl: '/modules/products/list/list.template.html',
    controller(productsFactory) {

        this.products = productsFactory.getProducts();
        'use strict';
        this.categories = ['Owoce, warzywa i zioła', 'Mleko, nabiał, jajka', 'Mięso'];

        this.subcategories = ['Owoce', 'Warzywa', 'Mięso'];
    }
};