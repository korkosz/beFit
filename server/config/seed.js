const Account = require('../auth/model');
const Version = require('../api/metadata/version.model');
const Picklist = require('../api/metadata/picklist.model');

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


const mealTypes = {
    name: 'mealTypes',
    values: [
        {label: 'Sniadanie'},
        {label: 'Obiad'},
        {label: 'Kolacja'}
    ]
};
const cookingTtimes = {
    name: 'cookingTimes',
    values: [
        {label: '5min'},
        {label: '10min'},
        {label: '15min'},
        {label: '30min'},
        {label: '45min'},
        {label: '1h'},
        {label: '1.5h'}
    ]
}
const mealAttrs = {
    name: 'mealAttrs',
    values: [
        {label: 'Bezglutenowy'},
        {label: 'Diabetyczny'},
        {label: 'Wysokobiałkowy'},
        {label: 'Niskotłuszczowy'},
        {label: 'Bez cukru'},
        {label: 'Wegański'},
        {label: 'Tani'},
        {label: 'Ekologiczny'}
    ]
};

Picklist.remove({})
    .then(()=> {
        Picklist.insertMany([mealTypes, cookingTtimes, mealAttrs], function(err, res) {
        });

    });
