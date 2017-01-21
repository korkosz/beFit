module.exports = function ($stateProvider) {
    $stateProvider.state({
        name: 'a', //authorized
        abstract: true,
        templateUrl: '/views/_layouts/default.layout.html',
        resolve: {
            authUser(auth) {
                if (auth.isLoggedIn()) {
                    return auth.getUser();
                } else {
                    return auth.setUser();
                }
            }
        }
    });

    $stateProvider.state({
        name: 'login',
        url: '/login',
        component: 'login',
        data: {
            notLoggedOnly: true
        }
    });
};