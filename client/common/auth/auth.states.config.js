module.exports = function ($transitions, $state, $q, auth) {
    $transitions.onError({}, (trans) => {
        if (trans._error === 401) {
            $state.go('login');
        } else if (trans._error === 'alreadyLogged') {
            $state.go('a.home');
        }
    });

    $transitions.onEnter({
        entering: function (state) {
            return state.data && state.data.notLoggedOnly;
        }
    }, function () {
        if (auth.isLoggedIn()) {
            return $q.reject('alreadyLogged');
        }
    });

    $state.defaultErrorHandler = function () {
        return function (err) {
            if (err) {
                console.warn(err);
            }
        };
    };
};