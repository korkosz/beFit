const Product = require('../product/produt.model');

module.exports.calculateNutritionValues = function(product, amount) {
    return new Promise((resolve, reject)=> {
        if(typeof product === 'string') {
            Product.findById(product)
                .then((_product)=> {
                    _calculateNutritionValues(_product, amount, resolve);
                })
                .catch((err)=> {
                    reject(err);
                });
        } else {
            _calculateNutritionValues(product, amount, resolve);
        }
    });
};

function _calculateNutritionValues({proteins, fats, carbs, calories}, amount, resolve) {
    resolve({
        proteins: (amount * proteins) / 100,
        fats: (amount * fats) / 100,
        carbs: (amount * carbs) / 100,
        calories: (amount * calories) / 100
    });
}