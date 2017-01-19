module.exports = angular.module('views', [])
    .controller('HomeCtrl', require('./home/home.ctrl'))
    //states
    .config(require('./view.states'));
