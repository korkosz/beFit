module.exports = function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: 'home',
        url: '/home',
        views: {
            '': {
                templateUrl: '/views/home/home.html'
            },
            'left-menu': {
                template: '<menu></menu>'
            }
        }
    });

    $stateProvider.state({
        name: 'meals',
        url: '/meals',
        views: {
            '': {
                templateUrl: '/views/meals/meals.html'
            },
            'left-menu': {
                template: '<menu></menu>'
            }
        }
    });

    $stateProvider.state({
        name: 'ingredients',
        templateUrl: '/views/ingredients/ingredients.html',
        url: '/ingredients',
        views: {
            '': {
                templateUrl: '/views/ingredients/ingredients.html'
            },
            'left-menu': {
                template: '<menu></menu>'
            }
        }
    });

    $stateProvider.state({
        name: 'history',
        templateUrl: '/views/history/history.html',
        url: '/history',
        views: {
            '': {
                templateUrl: '/views/history/history.html'
            },
            'left-menu': {
                template: '<menu></menu>'
            }
        }
    });

    $stateProvider.state({
        name: 'shopping',
        templateUrl: '/views/shopping/shopping.html',
        url: '/shopping',
        views: {
            '': {
                templateUrl: '/views/shopping/shopping.html'
            },
            'left-menu': {
                template: '<menu></menu>'
            }
        }
    });

    $stateProvider.state({
        name: 'combinations',
        templateUrl: '/views/combinations/combinations.html',
        url: '/combinations',
        views: {
            '': {
                templateUrl: '/views/combinations/combinations.html'
            },
            'left-menu': {
                template: '<menu></menu>'
            }
        }
    });

    $urlRouterProvider.otherwise('/home');
};