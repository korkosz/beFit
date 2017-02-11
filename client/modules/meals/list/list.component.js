'use strict';

module.exports = {
    templateUrl: '/modules/meals/list/list.template.html',
    controller(metadataFactory, mealsFactory) {
        const vm = this;

        vm.$onInit = function() {
            vm.mealAttrs = metadataFactory.get('mealAttrs');

            vm.mealTypes = metadataFactory.get('mealTypes');
            vm.cookingTimes = metadataFactory.get('cookingTimes').map((time)=> {
                return time.label;
            });

            mealsFactory.getMeals()
                .then((meals)=> {
                    vm.meals = meals;
                });
        };

        vm.filterChanged = function() {
            const filters = {
                name: vm.filters.name && vm.filters.name.length ? vm.filters.name : null,
                type: vm.filters.type && vm.filters.type._id,
                attributes: vm.filters.attributes
            };

            mealsFactory.getMeals(filters).then((result)=> {
                vm.meals = result;
            });
        };

        vm.attrToggled = function(val, label) {
            vm.filters.attributes = vm.filters.attributes || [];
            const attr = vm.mealAttrs.find((_attr)=> {
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

        vm.showDetails = function() {
            $('#detailsModal').modal('show');
        };

        vm.closeDetails = function() {
            $('#detailsModal').modal('hide');
        }

        vm.showNewMealModal = function() {
            $('#newMealModal').modal('show');
        };
    }
};