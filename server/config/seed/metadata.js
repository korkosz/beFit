module.exports = new Promise(function(resolve) {

    const Version = require('../../api/metadata/version.model.js');
    const Picklist = require('../../api/metadata/picklist.model.js');

    Version.remove({}).then(()=> {
        Version.create({
            version: 5
        });

    });
    // Version.findOneAndUpdate({}, {version: 1}, {upsert: true});

    const priceTypes = {
        '_id': '58a1bc03c14e2617787def4b',
        'name': 'priceTypes',
        'values': [
            {
                'label': 'szt',
                '_id': '58a1bc03c14e2617787def4e'
            },
            {
                'label': '100g',
                '_id': '58a1bc03c14e2617787def4d'
            },
            {
                'label': '1kg',
                '_id': '58a1bc03c14e2617787def4c'
            }
        ]
    };

    const mealTypes = {
        '_id': '588f2cca567a9d102cc610c3',
        'name': 'mealTypes',
        'values': [
            {
                'label': 'Sniadanie',
                '_id': '588f2cca567a9d102cc610c6'
            },
            {
                'label': 'Obiad',
                '_id': '588f2cca567a9d102cc610c5'
            },
            {
                'label': 'Kolacja',
                '_id': '588f2cca567a9d102cc610c4'
            }
        ]
    };

    const cookingTtimes = {
        '_id': '588f2cca567a9d102cc610c7',
        'name': 'cookingTimes',
        'values': [
            {
                'label': '5min',
                '_id': '588f2cca567a9d102cc610ce'
            },
            {
                'label': '10min',
                '_id': '588f2cca567a9d102cc610cd'
            },
            {
                'label': '15min',
                '_id': '588f2cca567a9d102cc610cc'
            },
            {
                'label': '30min',
                '_id': '588f2cca567a9d102cc610cb'
            },
            {
                'label': '45min',
                '_id': '588f2cca567a9d102cc610ca'
            },
            {
                'label': '1h',
                '_id': '588f2cca567a9d102cc610c9'
            },
            {
                'label': '1.5h',
                '_id': '588f2cca567a9d102cc610c8'
            }
        ]
    };

    const mealAttrs = {
        '_id': '588f2cca567a9d102cc610cf',
        'name': 'mealAttrs',
        'values': [
            {
                'label': 'Bezglutenowy',
                '_id': '588f2cca567a9d102cc610d7'
            },
            {
                'label': 'Diabetyczny',
                '_id': '588f2cca567a9d102cc610d6'
            },
            {
                'label': 'Wysokobiałkowy',
                '_id': '588f2cca567a9d102cc610d5'
            },
            {
                'label': 'Niskotłuszczowy',
                '_id': '588f2cca567a9d102cc610d4'
            },
            {
                'label': 'Bez cukru',
                '_id': '588f2cca567a9d102cc610d3'
            },
            {
                'label': 'Wegański',
                '_id': '588f2cca567a9d102cc610d2'
            },
            {
                'label': 'Tani',
                '_id': '588f2cca567a9d102cc610d1'
            },
            {
                'label': 'Ekologiczny',
                '_id': '588f2cca567a9d102cc610d0'
            }
        ]
    };

    const productCategories = {
        '_id': '588f2cca567a9d102cc610d8',
        'name': 'productCategories',
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

    const productAttrs = {
       '_id': '589383656bfd421fb0c2b6c0',
        'name': 'productAttrs',
        'values': [
            {
                'label': 'Bezglutenowy',
                '_id': '589383656bfd421fb0c2b6c8'
            },
            {
                'label': 'Diabetyczny',
                '_id': '589383656bfd421fb0c2b6c7'
            },
            {
                'label': 'Wysokobiałkowy',
                '_id': '589383656bfd421fb0c2b6c6'
            },
            {
                'label': 'Niskotłuszczowy',
                '_id': '589383656bfd421fb0c2b6c5'
            },
            {
                'label': 'Bez cukru',
                '_id': '589383656bfd421fb0c2b6c4'
            },
            {
                'label': 'Wegański',
                '_id': '589383656bfd421fb0c2b6c3'
            },
            {
                'label': 'Tani',
                '_id': '589383656bfd421fb0c2b6c2'
            },
            {
                'label': 'Ekologiczny',
                '_id': '589383656bfd421fb0c2b6c1'
            }
        ]
    };

    Picklist.remove({})
        .then(()=> {
            Picklist.insertMany([mealTypes, cookingTtimes, mealAttrs, productCategories, productAttrs, priceTypes], function(err, res) {
                resolve('success');
            });
        });

});
