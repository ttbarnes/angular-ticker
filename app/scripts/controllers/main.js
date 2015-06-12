'use strict';

/**
 * @ngdoc function
 * @name angularTickerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTickerApp
 */
angular.module('angularTickerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
