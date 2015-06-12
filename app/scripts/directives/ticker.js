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
        tickeritems: '='
      },
      templateUrl: 'views/directives/ticker.html',
      link: function postLink(scope, element) {

        scope.$watch(element, function(){
          var item = document.getElementsByTagName('li');
          console.info('no of items:', item.length);
          angular.element(item[1]).addClass('bingo');



          $interval(function(){
            console.log('this is an interval');
          }, 5000);


        });

      }

    };
  });
