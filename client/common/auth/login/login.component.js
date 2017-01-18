'use strict';

module.exports = {
    templateUrl: '/common/auth/login/login.template.html',
    controller($state, auth) {
        var vm = this;

        vm.logIn = function () {
            auth.logIn(vm.email, vm.password)
                .then(({data: user}) => {
                    auth.setUser(user);
                    $state.go('a.home');
                })
                .catch(({status})=> {
                    if (status === 401) {
                        alert('Zly login lub haslo hujcu !!!');
                    }
                    auth.setUser(null);
                });
        };

        vm.korkosz = function () {
            auth.logIn('korkosz@wp.pl', 'korkosz91')
                .then(({data: user}) => {
                    auth.setUser(user);
                    $state.go('a.home');
                });
        };
    }
};