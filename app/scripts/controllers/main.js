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
        'title': 'item 1',
        'copy': 'Tart candy canes gummi bears. Candy canes ice cream cheesecake tart pie powder sweet.'
      },
      {
        'title': 'item 2',
        'copy': 'Toffee jelly gummies donut cake. Fruitcake soufflé jelly cotton candy.'
      },
      {
        'title': 'item 3',
        'copy': 'Croissant cheesecake jujubes cupcake pudding apple pie cheesecake muffin.'
      },
      {
        'title': 'item 4',
        'copy': 'jelly beans croissant topping bear claw ice cream tootsie roll snaps.'
      },
      {
        'title': 'item 5',
        'copy': 'Cheesecake jujubes cupcake pudding apple pie cheesecake lollipop.'
      },
    ];

  });
