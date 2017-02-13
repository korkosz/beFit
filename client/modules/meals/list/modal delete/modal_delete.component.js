module.exports = {
    bindings: {
        mealId: '@',
        done: '&'
    },
    templateUrl: '/modules/meals/list/modal delete/modal_delete.template.html',
    controller(mealsFactory) {
        var vm = this;

        //TODO: zwracac status z factory - uwazaj na catch
        vm.delete = function() {
            mealsFactory.deleteMeal(vm.mealId).then(()=> {
                if(angular.isFunction(vm.done)) {
                    vm.done({result: 'deleted'});
                }
            });
        };

        vm.cancel = function() {
            vm.done({result: 'cancelled'});
        };
    }
};