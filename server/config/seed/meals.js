'use strict';

const Picklist = require('../../api/metadata/picklist.model.js');
const Meal = require('../../api/meal/meal.model.js');

const fakeNames = ['Owsianka', 'Ryż+kurczak', 'Jajo sadzone',
    'Owsianka v2', 'Kurczak po chinsku', 'Shake', 'Omlet', 'Kromka ze smalcem',
    'Pulpety', 'Placki ziemniaczane', 'Spaghetti carbonara'];

const times = ['588f2cca567a9d102cc610ce', '588f2cca567a9d102cc610cd',
    '588f2cca567a9d102cc610cc', '588f2cca567a9d102cc610cb', '588f2cca567a9d102cc610ca',
    '588f2cca567a9d102cc610c9', '588f2cca567a9d102cc610c8'];

Picklist.find({name: 'mealTypes'}).lean()
    .then((res)=> {
        Picklist.find({name: 'mealAttrs'}).lean().then((res2)=> {
            const fakeMealsArr = [];
            const types = res[0].values;
            const mealAttrs = res2[0].values;

            for(let item of fakeNames) {
                let fakeMeal = {
                    name: item,
                    time: times[Math.floor(Math.random() * times.length)],
                    calories: Math.floor(Math.random() * 450 + 300),
                    type: types[Math.floor(Math.random() * types.length)]._id,
                    attributes: generateAttributes(mealAttrs)
                }

                fakeMealsArr.push(fakeMeal);
            }

            Meal.remove({}).then(()=> {
                Meal.insertMany(fakeMealsArr, function(err, res) {
                });
            });
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