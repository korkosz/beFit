module.exports = function ($stateProvider) {
    $stateProvider.state({
        name: 'a', //authorized
        abstract: true,

        //TODO do zmiany
        template: `<div ui-view="left-menu" class="col-md-2"></div>
                   <div ui-view class="col-md-10"></div>`,

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