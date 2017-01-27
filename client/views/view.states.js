module.exports = function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: 'a.home',
        url: '/home',
        views: {
            '': {
                templateUrl: '/views/home/home.html',
                controller: 'HomeCtrl as homeCtrl'
            },
            'left-menu': {
                template: '<menu></menu>'
            }
        }
    });

    $stateProvider.state({
        name: 'a.meals',
        url: '/meals',
        views: {
            '': {
                templateUrl: '/views/meals/meals.html',
                controller: 'MealsCtrl as mealsCtrl'
            },
            'left-menu': {
                template: '<menu></menu>'
            }
        }
    });

    $stateProvider.state({
        name: 'a.products',
        templateUrl: '/views/products/products.html',
        url: '/ingredients',
        views: {
            '': {
                templateUrl: '/views/products/products.html'
            },
            'left-menu': {
                template: '<menu></menu>'
            }
        }
    });

    $stateProvider.state({
        name: 'a.history',
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
        name: 'a.shopping',
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
        name: 'a.combinations',
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