module.exports = function ($stateProvider) {
    $stateProvider.state({
        name: 'a', //authorized
        abstract: true,

        //TODO do zmiany
        template: `<div ui-view="left-menu"></div>
                   <div ui-view></div>`,

        resolve: {
            authUser($q, auth) {
                if (auth.isLoggedIn()) {
                    return $q.when(auth.getUser());
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