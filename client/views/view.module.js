module.exports = angular.module('views', [])
    .controller('HomeCtrl', require('./home/home.ctrl'))
    .controller('MealsCtrl', require('./meals/meals.controller'))
    //states
    .config(require('./view.states'));
