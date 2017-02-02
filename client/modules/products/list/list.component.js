module.exports = {
    templateUrl: '/modules/products/list/list.template.html',
    controller(productsFactory, metadataFactory) {
        const vm = this;

        vm.$onInit = function() {
            productsFactory.getProducts().then((result)=> {
                vm.products = result;
            });

            vm.filters = {
                ownOrAll: 'ALL'
            };
            vm.productCategs = metadataFactory.get('productCategories');
        };

        vm.categoryChanged = function() {
            vm.filters.subcategory = null;
            vm.filterChanged();
        };

        vm.pickMyOrAll = function(val) {
            if(vm.filters.ownOrAll !== val) {
                vm.filters.ownOrAll = val;
                vm.filterChanged();
            }
        };

        vm.filterChanged = function() {
            const filters = {
                name: vm.filters.name && vm.filters.name.length ? vm.filters.name : null,
                category: vm.filters.category && vm.filters.category._id,
                subcategory: vm.filters.subcategory && vm.filters.subcategory._id,
                own: vm.filters.ownOrAll === 'OWN'
            };

            productsFactory.getProducts(filters).then((result)=> {
                vm.products = result;
            });
        };
    }
};

/**
 0
 _id
 :
 "5893470891b5ff20d0654036"
 carbs
 :
 30
 category
 :
 "588f2cca567a9d102cc610e8"
 fats
 :
 0.3
 name
 :
 "Chleb razowy"
 price
 :
 3.6
 priceType
 :
 "szt"
 priceUpdateDate
 :
 1486046984030
 proteins
 :
 5
 subcategory
 :
 "588f2cca567a9d102cc610ea"
 */