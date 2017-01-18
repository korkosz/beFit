let user = null;

class Auth {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    logout() {
        return this.$http.get('/auth/logout').then(() => {
            user = null;
        });
    }

    isLoggedIn() {
        return !!user;
    }

    getUser() {
        return user;
    }

    setUser(_user) {
        if (_user) {
            user = _user;
            return;
        }

        return this.$http.get('/auth/user')
            .then(({data: _user})=> {
                user = _user;
            })
            .catch(({status})=> {
                throw status;
            });
    }

    logIn(email, password) {
        return this.$http.post('/auth/login', {
            email: email,
            password: password
        });
    }
}

module.exports = Auth;