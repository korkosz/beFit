var moment = require('moment');

module.exports = {
    templateUrl: '/common/horizontal calendar/horizontal_calendar.template.html',
    bindings: {
        number: '<',
        setDay: '&'
    },
    controller() {
        let vm = this;

        function init() {
            vm.selectedDay = moment();
            vm.beforeDays = [];
            vm.afterDays = [];

            vm.number = vm.number || 4;

            setUpDays();
        }

        vm.$onInit = init;

        vm.nextDay = function () {
            vm.selectedDay.add(1, 'd');
            setUpDays();
        };

        vm.previousDay = function () {
            vm.selectedDay.subtract(1, 'd');
            setUpDays();
        };

        vm.addDays = function (number) {
            vm.selectedDay.add(number, 'd');
            setUpDays();
        };

        vm.removeDays = function (number) {
            vm.selectedDay.subtract(number, 'd');
            setUpDays();
        };

        vm.isToday = function (day) {
            const dayMomentObj = moment()
                .date(day.day)
                .month(day.month)
                .year(day.year);

            return moment().isSame(
                moment(dayMomentObj), 'd');
        };

        vm.refresh = function () {
            init();
        };

        function setUpDays() {
            vm.setDay({day: vm.selectedDay.valueOf()});
            prependDays();
            appendDays();
        }

        function prependDays() {
            vm.beforeDays.length = 0;
            for (let i = vm.number; i > 0; i--) {
                let selectedDayCopy = moment(vm.selectedDay).subtract(i, 'd');
                vm.beforeDays.push({
                    day: selectedDayCopy.format('DD'),
                    weekDay: selectedDayCopy.format('ddd'),
                    month: selectedDayCopy.month(),
                    year: selectedDayCopy.year(),
                    weekend: selectedDayCopy.day() === 0 ||
                    selectedDayCopy.day() === 6
                });
            }
        }

        function appendDays() {
            vm.afterDays.length = 0;
            for (let i = 1; i <= vm.number; i++) {
                let selectedDayCopy = moment(vm.selectedDay).add(i, 'd');
                vm.afterDays.push({
                    day: selectedDayCopy.format('DD'),
                    weekDay: selectedDayCopy.format('ddd'),
                    month: selectedDayCopy.month(),
                    year: selectedDayCopy.year(),
                    weekend: selectedDayCopy.day() === 0 ||
                    selectedDayCopy.day() === 6
                });
            }
        }
    }
};
