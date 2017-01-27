module.exports = {
    templateUrl: '/common/ct select/ct_select.template.html',
    bindings: {
        options: '<'
    },
    controller() {
        const vm = this;

        vm.$onInit = function() {
            vm.selectedOption = null;
        };

        vm.selectOption = function(option) {
            vm.selectedOption = option;
        };

        vm.clearOption = function() {
            vm.selectedOption = null;
        };
    }
};