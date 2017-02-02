module.exports = {
    templateUrl: '/libs/ct/ct select/ct_select.template.html',
    require: {
        'ngModelCtrl': 'ngModel'
    },
    bindings: {
        ngChange: '&',
        title: '@',
        options: '<'
    },
    controller() {
        const vm = this;

        vm.$onInit = function() {
            vm.selectedOption = null;

            vm.ngChange = vm.ngChange || angular.noon;

            vm.ngModelCtrl.$render = function() {
                vm.selectedOption = vm.ngModelCtrl.$viewValue;
            };
        };

        vm.selectOption = function(option) {
            vm.selectedOption = option;
            vm.ngModelCtrl.$setViewValue(option);
            vm.ngChange();
        };

        vm.clearOption = function() {
            vm.selectedOption = null;
            vm.ngModelCtrl.$setViewValue(null);
            vm.ngChange();
        };
    }
};