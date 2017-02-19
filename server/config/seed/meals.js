'use strict';

const Picklist = require('../../api/metadata/picklist.model.js');
const Meal = require('../../api/meal/meal.model.js');
const Product = require('../../api/product/produt.model');

const mealHelpers = require('../../api/meal/meal.helpers.js');

const fakeNames = ['Owsianka', 'Ryż+kurczak', 'Jajo sadzone',
    'Owsianka v2', 'Kurczak po chinsku', 'Shake', 'Omlet', 'Kromka ze smalcem',
    'Pulpety', 'Placki ziemniaczane', 'Spaghetti carbonara'];

const times = ['588f2cca567a9d102cc610ce', '588f2cca567a9d102cc610cd',
    '588f2cca567a9d102cc610cc', '588f2cca567a9d102cc610cb', '588f2cca567a9d102cc610ca',
    '588f2cca567a9d102cc610c9', '588f2cca567a9d102cc610c8'];


Picklist.find({name: 'mealTypes'}).lean()
    .then((mealTypes)=> {
        Picklist.find({name: 'mealAttrs'})
            .then((_mealAttrs)=> {
                Product.find({}).lean()
                    .then((products)=> {
                        const fakeMealsArr = [];
                        const types = mealTypes[0].values;
                        const mealAttrs = _mealAttrs[0].values;

                        for(let item of fakeNames) {
                            let ingredients = generateProducts(products);
                            let calories = calculateCalories(ingredients);

                            let fakeMeal = {
                                name: item,
                                time: times[Math.floor(Math.random() * times.length)],
                                type: types[Math.floor(Math.random() * types.length)]._id,
                                attributes: generateAttributes(mealAttrs),
                                ingredients: ingredients,
                                calories: calories
                            };

                            fakeMealsArr.push(fakeMeal);
                        }

                        Meal.remove({}).then(()=> {
                            Meal.insertMany(fakeMealsArr, function(err, res) {
                            });
                        });
                    })
            });
    })
    .catch((err)=> {
        debugger
    });

function generateAttributes(_mealAttrs) {
    var ret = [];
    var first = _mealAttrs[Math.floor(Math.random() * _mealAttrs.length)]._id;
    var second = _mealAttrs[Math.floor(Math.random() * _mealAttrs.length)]._id;

    if(first === second) second = null;

    var third = _mealAttrs[Math.floor(Math.random() * _mealAttrs.length)]._id;

    if(third === first || third === second) third = null;

    ret.push(first);

    if(second) ret.push(second);
    if(third) ret.push(third);

    return ret;
}

function generateProducts(_products) {
    let counter = Math.floor(Math.random() * _products.length) || 1;
    const prods = [];

    while(counter--) {
        let amount = Math.floor(Math.random() * 200 + 30);
        let product = _products[Math.floor(Math.random() * _products.length)];
        let nutritionValues = mealHelpers.calculateNutritionValues(product, amount);

        nutritionValues.product = product._id;
        nutritionValues.amount = amount;

        prods.push(nutritionValues);
    }

    return prods;
}

function calculateCalories(ingredients) {
    return ingredients.reduce((value, prod)=> {
        return prod.calories + value;
    }, 0);
}