module.exports = {
    templateUrl: '/modules/products/modal new/modal_new.template.html',
    controller(metadataFactory) {
        const vm = this;

        vm.$onInit = function() {
            vm.activeTabIdx = 0;

            vm.productAttrs = metadataFactory.get('productAttrs');
            vm.productCategs = metadataFactory.get('productCategories');
        };

        vm.categoryChanged = function() {
            vm.subcategory = null;
        };

        vm.save = function(private) {
            //vm.$onInit();
            $('#newProductModal').modal('hide');
        };

        vm.nextTab = function() {
            if(vm.activeTabIdx < 5) {
                vm.activeTabIdx++;
            }
        };

        vm.prevTab = function() {
            if(vm.activeTabIdx > 0) {
                vm.activeTabIdx--;
            }
        };
    }
};