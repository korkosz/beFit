module.exports = new Promise(function(resolve) {

    const Version = require('../../api/metadata/version.model.js');
    const Picklist = require('../../api/metadata/picklist.model.js');

    Version.remove({}).then(()=> {
        Version.create({
            version: 1
        });

    });
   // Version.findOneAndUpdate({}, {version: 1}, {upsert: true});

    const mealTypes = {
        '_id': '588f2cca567a9d102cc610c3',
        'name': 'mealTypes',
        'values': [
            {
                'label': 'Sniadanie',
                '_id': '588f2cca567a9d102cc610c6',
                'subtypes': []
            },
            {
                'label': 'Obiad',
                '_id': '588f2cca567a9d102cc610c5',
                'subtypes': []
            },
            {
                'label': 'Kolacja',
                '_id': '588f2cca567a9d102cc610c4',
                'subtypes': []
            }
        ]
    };

    const cookingTtimes = {
        '_id': '588f2cca567a9d102cc610c7',
        'name': 'cookingTimes',
        'values': [
            {
                'label': '5min',
                '_id': '588f2cca567a9d102cc610ce',
                'subtypes': []
            },
            {
                'label': '10min',
                '_id': '588f2cca567a9d102cc610cd',
                'subtypes': []
            },
            {
                'label': '15min',
                '_id': '588f2cca567a9d102cc610cc',
                'subtypes': []
            },
            {
                'label': '30min',
                '_id': '588f2cca567a9d102cc610cb',
                'subtypes': []
            },
            {
                'label': '45min',
                '_id': '588f2cca567a9d102cc610ca',
                'subtypes': []
            },
            {
                'label': '1h',
                '_id': '588f2cca567a9d102cc610c9',
                'subtypes': []
            },
            {
                'label': '1.5h',
                '_id': '588f2cca567a9d102cc610c8',
                'subtypes': []
            }
        ]
    };

    const mealAttrs = {
        '_id': '588f2cca567a9d102cc610cf',
        'name': 'mealAttrs',
        'values': [
            {
                'label': 'Bezglutenowy',
                '_id': '588f2cca567a9d102cc610d7',
                'subtypes': []
            },
            {
                'label': 'Diabetyczny',
                '_id': '588f2cca567a9d102cc610d6',
                'subtypes': []
            },
            {
                'label': 'Wysokobiałkowy',
                '_id': '588f2cca567a9d102cc610d5',
                'subtypes': []
            },
            {
                'label': 'Niskotłuszczowy',
                '_id': '588f2cca567a9d102cc610d4',
                'subtypes': []
            },
            {
                'label': 'Bez cukru',
                '_id': '588f2cca567a9d102cc610d3',
                'subtypes': []
            },
            {
                'label': 'Wegański',
                '_id': '588f2cca567a9d102cc610d2',
                'subtypes': []
            },
            {
                'label': 'Tani',
                '_id': '588f2cca567a9d102cc610d1',
                'subtypes': []
            },
            {
                'label': 'Ekologiczny',
                '_id': '588f2cca567a9d102cc610d0',
                'subtypes': []
            }
        ]
    };

    const productTypes = {
        '_id': '588f2cca567a9d102cc610d8',
        'name': 'productTypes',
        'values': [
            {
                'label': 'Pieczywo',
                '_id': '588f2cca567a9d102cc610e8',
                'subtypes': [
                    {
                        'label': 'Pszenne',
                        '_id': '588f2cca567a9d102cc610ea'
                    },
                    {
                        'label': 'Razowe i Żytnie',
                        '_id': '588f2cca567a9d102cc610e9'
                    }
                ]
            },
            {
                'label': 'Mięso',
                '_id': '588f2cca567a9d102cc610e3',
                'subtypes': [
                    {
                        'label': 'Drób',
                        '_id': '588f2cca567a9d102cc610e7'
                    },
                    {
                        'label': 'Wieprzowina',
                        '_id': '588f2cca567a9d102cc610e6'
                    },
                    {
                        'label': 'Wołowina',
                        '_id': '588f2cca567a9d102cc610e5'
                    },
                    {
                        'label': 'Cielęcina',
                        '_id': '588f2cca567a9d102cc610e4'
                    }
                ]
            },
            {
                'label': 'Owoce i Warzywa',
                '_id': '588f2cca567a9d102cc610e0',
                'subtypes': [
                    {
                        'label': 'Owoce',
                        '_id': '588f2cca567a9d102cc610e2'
                    },
                    {
                        'label': 'Warzywa',
                        '_id': '588f2cca567a9d102cc610e1'
                    }
                ]
            },
            {
                'label': 'Płatki śniadaniowe i otręby',
                '_id': '588f2cca567a9d102cc610d9',
                'subtypes': [
                    {
                        'label': 'Otręby',
                        '_id': '588f2cca567a9d102cc610df'
                    },
                    {
                        'label': 'Płatki owsiane i owsianka',
                        '_id': '588f2cca567a9d102cc610de'
                    },
                    {
                        'label': 'Płatki ryżowe',
                        '_id': '588f2cca567a9d102cc610dd'
                    },
                    {
                        'label': 'Musli',
                        '_id': '588f2cca567a9d102cc610dc'
                    },
                    {
                        'label': 'Płatki pszenne i zbożowe',
                        '_id': '588f2cca567a9d102cc610db'
                    },
                    {
                        'label': 'Płatki kukurydziane',
                        '_id': '588f2cca567a9d102cc610da'
                    }
                ]
            }
        ]
    };

    Picklist.remove({})
        .then(()=> {
            Picklist.insertMany([mealTypes, cookingTtimes, mealAttrs, productTypes], function(err, res) {
                resolve('success');
            });
        });

});
