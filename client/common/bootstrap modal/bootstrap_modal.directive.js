module.exports = function () {
    return {
        transclude: true,
        scope: {
            'modalId': '@'
        },
        templateUrl: '/common/bootstrap modal/bootstrap.modal.template.html'
    };
};