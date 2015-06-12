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
          var list = document.getElementsByTagName('ul');
          var item = document.getElementsByTagName('li');
          console.info('no of items:', item.length);

          $interval(function(){
            console.log('interval started');

            angular.element(list).addClass('move-up');
            angular.element(list).append(angular.element(item[0]));
            angular.element(list).removeClass('move-up');

          }, 5000);


        });

      }

    };
  });
