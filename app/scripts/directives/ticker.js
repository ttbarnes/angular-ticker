'use strict';

/**
 * @ngdoc directive
 * @name angularTickerApp.directive:ticker
 * @description
 * # ticker
 */
angular.module('angularTickerApp')
  .directive('ticker', function ($interval) {
    return {

      restrict: 'EA',
      transclude : false,
      scope: {
        tickeritems: '=',
        timing: '@'
      },
      templateUrl: 'views/directives/ticker.html',
      link: function postLink(scope, element) {

        var list = document.getElementsByTagName('ul'),
            item = document.getElementsByTagName('li'),
            timing;

        if (scope.timing) {
          timing = scope.timing;
        } 
        else {
          timing = 5000;
        }

        scope.$watch(element, function(){

          if(item.length) {

            console.info(item.length + ' items in ticker');

            $interval(function(){
              console.log('interval started');

              angular.element(list).addClass('move-up');

              setTimeout(function(){
                angular.element(list).addClass('move-up-cancel');
                angular.element(list).append(angular.element(item[0]));
              }, 1000);

            }, timing);

          } 
          else {
            console.error('angularTicker error - no items assigned! \n Ensure that you have the correct value assigned to tickeritems. Eg: \n <ticker tickeritems="myTickerItems"></ticker> \n $scope.myTickerItems = [ {...}, {...} ];');
          }

        });

      }

    };
  });
