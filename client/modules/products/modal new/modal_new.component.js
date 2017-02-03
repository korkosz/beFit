module.exports = {
    templateUrl: '/modules/products/modal new/modal_new.template.html',
    controller(metadataFactory) {
        const vm = this;

        vm.$onInit = function() {
            vm.activeTabIdx = 0;

            vm.productCategs = metadataFactory.get('productCategories');
        };

        vm.categoryChanged = function() {
            vm.subcategory = null;
        };

        vm.save = function() {
            vm.$onInit();
            $('#newMealModal').modal('hide');
        };

        vm.nextTab = function() {
            if(vm.activeTabIdx < 4) {
                vm.activeTabIdx++;
            }
        };

        vm.prevTab = function() {
            if(vm.activeTabIdx > 0) {
                vm.activeTabIdx--;
            }
        };

        vm.firstFormInvalid = function() {
            return !vm.name || !vm.category;
        };
    }
};