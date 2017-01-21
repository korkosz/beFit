'use strict';

module.exports = function () {
    return {
        transclude: {
            'ctListHeader': 'ctListHeader',
            'ctListBody': 'ctListBody'
        },
        templateUrl: '/common/list/ct_list.template.html',
        link(scope, el, attrs){
        }
    };
};

