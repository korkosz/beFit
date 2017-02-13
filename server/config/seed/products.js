'use strict';

const Picklist = require('../../api/metadata/picklist.model.js');
const Product = require('../../api/product/produt.model');

const names = ['Chleb razowy', 'Jajka', 'Banan', 'Ziemniaki', 'Ryż biały', 'Kasza Jęczmienna'];

Product.remove({}).then(()=> {
    let prods = [{
        name: 'Chleb razowy',
        price: 2.02,
        priceType: '58a1bc03c14e2617787def4e',
        priceUpdateDate: (new Date()).getTime(),
        proteins: 11,
        fats: 3,
        carbs: 40,
        owner: global.acc1,
        category: '588f2cca567a9d102cc610e8',
        subcategory: '588f2cca567a9d102cc610ea',
        attributes: ['589383656bfd421fb0c2b6c8', '589383656bfd421fb0c2b6c7', '589383656bfd421fb0c2b6c6', '589383656bfd421fb0c2b6c5']
    }, {
        name: 'Jabłko',
        price: 0.60,
        priceType: '58a1bc03c14e2617787def4e',
        priceUpdateDate: (new Date()).getTime(),
        proteins: 5,
        fats: 0.3,
        carbs: 30,
        owner: global.acc2,
        category: '588f2cca567a9d102cc610e0',
        subcategory: '588f2cca567a9d102cc610e2',
        attributes: ['589383656bfd421fb0c2b6c8', '589383656bfd421fb0c2b6c7', '589383656bfd421fb0c2b6c6', '589383656bfd421fb0c2b6c5']
    }, {
        name: 'Platki Owsiane',
        price: 4.32,
        priceType: '58a1bc03c14e2617787def4c',
        priceUpdateDate: (new Date()).getTime(),
        proteins: 5,
        fats: 12,
        carbs: 30,
        owner: global.acc1,
        category: '588f2cca567a9d102cc610d9',
        subcategory: '588f2cca567a9d102cc610de',
        attributes: ['589383656bfd421fb0c2b6c6', '589383656bfd421fb0c2b6c5']
    }, {
        name: 'Chleb razowy',
        price: 33,
        priceType: '58a1bc03c14e2617787def4d',
        priceUpdateDate: (new Date()).getTime(),
        proteins: 5,
        fats: 0.3,
        carbs: 30,
        owner: global.acc2,
        category: '588f2cca567a9d102cc610e8',
        subcategory: '588f2cca567a9d102cc610ea',
        attributes: ['589383656bfd421fb0c2b6c7']
    }, {
        name: 'Chleb razowy',
        price: 12,
        priceType: '58a1bc03c14e2617787def4d',
        priceUpdateDate: (new Date()).getTime(),
        proteins: 1,
        fats: 4,
        carbs: 22,
        owner: global.acc2,
        category: '588f2cca567a9d102cc610e8',
        subcategory: '588f2cca567a9d102cc610ea',
        attributes: ['589383656bfd421fb0c2b6c4', '589383656bfd421fb0c2b6c3']
    }];

    Product.insertMany(prods, function(err, res) {
    });
});