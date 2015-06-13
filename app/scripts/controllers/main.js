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

    $scope.myTickerItems = [
      {
        'copy': 'item 1',
        'author': 'Tom A'
      },
      {
        'copy': 'item 2',
        'author': 'Tony B'
      },
      {
        'copy': 'item 3',
        'author': 'Tim C'
      }
    ];

  });
