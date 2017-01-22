module.exports = {
    templateUrl: '/components/new meal modal/new_meal_modal.template.html',
    controller() {
        let vm = this;

        const tabs = ['FIRST', 'SECOND', 'THIRD'];
        let activeTabIdx;

        vm.$onInit = function () {
            activeTabIdx = 0;
            updateTab();
        };

        vm.save = function () {
            vm.$onInit();
            $('#newMealModal').modal('hide');
        };

        vm.nextTab = function () {
            if (activeTabIdx < tabs.length - 1) {
                activeTabIdx++;
                updateTab();
            }
        };

        vm.prevTab = function () {
            if (activeTabIdx > 0) {
                activeTabIdx--;
                updateTab();
            }
        };

        function updateTab() {
            vm.activeTab = tabs[activeTabIdx];
        }
    }
};