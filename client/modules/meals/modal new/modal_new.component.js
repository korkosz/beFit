module.exports = {
    templateUrl: '/modules/meals/modal new/modal_new.template.html',
    controller(metadataFactory) {
        const vm = this;

        vm.$onInit = function () {
            vm.activeTabIdx = 2;

            vm.mealTypes = metadataFactory.get('mealTypes');
            vm.mealAttrs = metadataFactory.get('mealAttrs');
            vm.cookingTimes = metadataFactory.get('cookingTimes');
        };

        vm.attrToggled = function(val, label) {
            vm.newMeal.attributes = vm.newMeal.attributes || [];

            const attr = vm.mealAttrs.find((_attr)=> {
                return _attr.label === label;
            });

            if(val) {
                vm.newMeal.attributes.push(attr._id);
            } else {
                vm.newMeal.attributes.splice(
                    vm.newMeal.attributes.indexOf(attr._id), 1);
            }
        };

        vm.save = function () {
            vm.$onInit();
            $('#newMealModal').modal('hide');
        };

        vm.nextTab = function() {
            if(vm.activeTabIdx < 3) {
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