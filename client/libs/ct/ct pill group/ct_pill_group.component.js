module.exports = {
    bindings: {
        pills: '<'
    },
    templateUrl: '/libs/ct/ct pill group/ct_pill_group.template.html',
    controller() {
        var vm = this;

        vm.$onInit = function() {
            vm.activePill = null;
        };

        vm.setActivePill = function(pill) {
            vm.activePill = pill;
        };
    }
};