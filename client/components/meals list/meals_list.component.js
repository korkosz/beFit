'use strict';

module.exports = {
    templateUrl: '/components/meals list/meals_list.template.html',
    controller() {
        this.showDetails = function () {
            $('#detailsModal').modal('show');
        };

        this.closeDetails = function () {
            $('#detailsModal').modal('hide');
        }

        this.showNewMealModal = function () {
            $('#newMealModal').modal('show');
        };

        this.mealTypes = ['Sniadanie', 'Obiad', 'Kolacja'];
        this.cookingTimes = ['5min', '10min', '15min', '20min', '25min', '30min'];
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