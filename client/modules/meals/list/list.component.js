'use strict';

module.exports = {
    templateUrl: '/modules/meals/list/list.template.html',
    controller(metadataFactory, mealsFactory) {
        const vm = this;

        vm.$onInit = function() {
            vm.mealAttrs = metadataFactory.get('mealAttrs');

            //TODO: do zmiany - dyrektywy maja przyjmowac label i value - przez default _id bo mongo
            vm.mealTypes = metadataFactory.get('mealTypes').map((type)=> {
                return type.label;
            });
            vm.cookingTimes = metadataFactory.get('cookingTimes').map((time)=> {
                return time.label;
            });

            mealsFactory.getMeals()
                .then((meals)=> {
                    //vm.meals = meals;
                });
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

        this.meals = [{
            name: 'Owsianka',
            type: 'Sniadanie',
            time: 15,
            calories: 650
        }, {
            name: 'Owsianka',
            type: 'Sniadanie',
            time: 15,
            calories: 650
        }, {
            name: 'Owsianka',
            type: 'Sniadanie',
            time: 15,
            calories: 650
        }, {
            name: 'Owsianka',
            type: 'Sniadanie',
            time: 15,
            calories: 650
        }, {
            name: 'Owsianka',
            type: 'Sniadanie',
            time: 15,
            calories: 650
        }, {
            name: 'Owsianka',
            type: 'Sniadanie',
            time: 15,
            calories: 650
        }, {
            name: 'Owsianka',
            type: 'Sniadanie',
            time: 15,
            calories: 650
        }];

    }
};