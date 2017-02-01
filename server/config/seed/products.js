'use strict';

const Picklist = require('../../api/metadata/picklist.model.js');
const Product = require('../../api/product/produt.model');

const names = ['Chleb razowy', 'Jajka', 'Banan', 'Ziemniaki', 'Ryż biały', 'Kasza Jęczmienna'];

Product.remove({}).then(()=> {
    let prods = [{
        name: 'Chleb razowy',
        price: 3.60,
        priceType: 'szt',
        priceUpdateDate: (new Date()).getTime(),
        proteins: 5,
        fats: 0.3,
        carbs: 30,
        owner: global.acc1,
        category: '588f2cca567a9d102cc610e8',
        subcategory: '588f2cca567a9d102cc610ea'
    }, {
        name: 'Jabłko',
        price: 3.60,
        priceType: 'szt',
        priceUpdateDate: (new Date()).getTime(),
        proteins: 5,
        fats: 0.3,
        carbs: 30,
        owner: global.acc2,
        category: '588f2cca567a9d102cc610e0',
        subcategory: '588f2cca567a9d102cc610e2'
    }, {
        name: 'Platki Owsiane',
        price: 3.60,
        priceType: 'szt',
        priceUpdateDate: (new Date()).getTime(),
        proteins: 5,
        fats: 0.3,
        carbs: 30,
        owner: global.acc1,
        category: '588f2cca567a9d102cc610d9',
        subcategory: '588f2cca567a9d102cc610de'
    }, {
        name: 'Chleb razowy',
        price: 3.60,
        priceType: 'szt',
        priceUpdateDate: (new Date()).getTime(),
        proteins: 5,
        fats: 0.3,
        carbs: 30,
        owner: global.acc2,
        category: '588f2cca567a9d102cc610e8',
        subcategory: '588f2cca567a9d102cc610ea'
    }, {
        name: 'Chleb razowy',
        price: 3.60,
        priceType: 'szt',
        priceUpdateDate: (new Date()).getTime(),
        proteins: 5,
        fats: 0.3,
        carbs: 30,
        owner: global.acc2,
        category: '588f2cca567a9d102cc610e8',
        subcategory: '588f2cca567a9d102cc610ea'
    }];

    Product.insertMany(prods, function(err, res) {
    });
});