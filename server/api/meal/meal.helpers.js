module.exports.calculateNutritionValues = function({proteins, fats, carbs, calories}, amount) {
    return {
        proteins: Math.floor((amount * proteins) / 100),
        fats: Math.floor((amount * fats) / 100),
        carbs: Math.floor((amount * carbs) / 100),
        calories: Math.floor((amount * calories) / 100)
    }
};