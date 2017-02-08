module.exports = {
    templateUrl: '/modules/products/list/list.template.html',
    controller(productsFactory, metadataFactory, $timeout) {
        const vm = this;

        vm.$onInit = function() {
            productsFactory.getProducts().then((result)=> {
                vm.products = result;
            });

            vm.filters = {
                ownOrAll: 'ALL'
            };
            vm.productAttrs = metadataFactory.get('productAttrs');
            vm.productCategs = metadataFactory.get('productCategories');

            //used to reset modal cmp
            vm.clearModal = true;
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
                own: vm.filters.ownOrAll === 'OWN',
                attributes: vm.filters.attributes
            };

            productsFactory.getProducts(filters).then((result)=> {
                vm.products = result;
            });
        };

        vm.attrToggled = function(val, label) {
            vm.filters.attributes = vm.filters.attributes || [];
            const attr = vm.productAttrs.find((_attr)=> {
                return _attr.label === label;
            });

            if(val) {
                vm.filters.attributes.push(attr._id);
            } else {
                vm.filters.attributes.splice(
                    vm.filters.attributes.indexOf(attr._id), 1);
            }
            vm.filterChanged();
        };

        vm.openNewProductModal = function() {
            $('#newProductModal').modal('show');

            $('#newProductModal').on('hide.bs.modal', function() {
                if(vm.newProductModalStatus === 201) {
                    productsFactory.getProducts().then((result)=> {
                        vm.products = result;
                    });
                }
            });

            $('#newProductModal').on('hidden.bs.modal', function() {
                clearModal();
            });

            $('#newProductModal').on('show.bs.modal', function() {
                vm.newProductModalStatus = null;
            });
        };

        function clearModal() {
            $timeout(()=> {
                vm.clearModal = false;
            });
            $timeout(()=> {
                vm.clearModal = true;
            });
        }
    }
};
