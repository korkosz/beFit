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