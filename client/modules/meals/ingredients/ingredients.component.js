'use strict';

module.exports = {
    templateUrl: '/modules/meals/ingredients/ingredients.template.html',
    bindings: {
        mode: '@',
        meal: '<'
    },
    controller() {
        var vm = this;

        vm.$onInit = function() {

        };

        vm.showProductList = function() {
            $('#productListModal').modal('show');
        };

        //TODO: dodaj funkcje "done(inna nazwa)" ktora bedzie  wolana po zakonczeniu edycji produktow i jako parametr bedzie przekazywala tablice produktow - wykorzystasz ja i na home i tu
    }
};