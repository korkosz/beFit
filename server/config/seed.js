const Account = require('../auth/model');

Account.find({}).remove()
    .then(function () {
        Account.register(new Account({
            email: 'korkosz@wp.pl'
        }), 'korkosz91', function (err, acc) {
            if (err) {
                throw new Error('seed error');
            }
        });
    });