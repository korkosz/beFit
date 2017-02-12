module.exports = {
    bindings: {
        pills: '<',
        multiple: '<',
        onChange: '&'
    },
    templateUrl: '/libs/ct/ct pill group/ct_pill_group.template.html',
    controller() {
        var vm = this;

        vm.$onInit = function() {
            vm.activePills = [];
        };

        vm.setActivePill = function(pill) {
            if(vm.multiple) {
                togglePillWhenMultiple(pill);
            } else {
                togglePillWhenSingle(pill);
            }
            if(angular.isFunction(vm.onChange)) {
                vm.onChange({activePills: vm.activePills});
            }
        };

        vm.isPillChecked = function(pill) {
            if(vm.multiple) {
                return vm.activePills.includes(pill);
            } else {
                return vm.activePills === pill;
            }
        };

        ///
        function togglePillWhenMultiple(pill) {
            const idx = vm.activePills.indexOf(pill);

            if(idx === -1) {
                vm.activePills.push(pill);
            } else {
                vm.activePills.splice(idx, 1);
            }
        }

        function togglePillWhenSingle(pill) {
            if(vm.activePills !== pill) {
                vm.activePills = pill;
            } else {
                vm.activePills = null;
            }
        }
    }
};