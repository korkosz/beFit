require('./metadata').then(function() {
    require('./meals');
    require('./products');
});

const Account = require('../../auth/model');

Account.find({}).remove()
    .then(function() {
        Account.register(new Account({
            email: 'korkosz@wp.pl'
        }), 'korkosz91', function(err, acc) {
            if(err) {
                throw new Error('seed error');
            }

            global.acc1 = acc.id;
        });

        Account.register(new Account({
            email: 'maciejchmiel@wp.pl'
        }), 'korkosz91', function(err, acc) {
            if(err) {
                throw new Error('seed error');
            }

            global.acc2 = acc.id;
        });
    });