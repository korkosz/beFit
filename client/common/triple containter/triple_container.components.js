module.exports = {
    restrict: 'E',
    templateUrl: '/common/triple containter/triple_container.template.html',
    transclude: {
        left: '?left',
        middle: '?middle',
        right: '?right'
    },
    controller(){
        "use strict";

    }
};