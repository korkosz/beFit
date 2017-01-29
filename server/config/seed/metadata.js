module.exports = new Promise(function(resolve, reject) {

    const Version = require('../../api/metadata/version.model.js');
    const Picklist = require('../../api/metadata/picklist.model.js');

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
                resolve('success');
            });
        });

});
