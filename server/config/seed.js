const Account = require('../auth/model');
const Version = require('../api/metadata/version.model');

Account.find({}).remove()
    .then(function() {
        Account.register(new Account({
            email: 'korkosz@wp.pl'
        }), 'korkosz91', function(err, acc) {
            if(err) {
                throw new Error('seed error');
            }
        });
    });

Version.findOneAndUpdate({}, {version: 1}, {upsert: true});