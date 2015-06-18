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
      transclude : true,
      scope: {
        tickeritems: '=',
        timing: '@'
      },
      templateUrl: 'views/directives/ticker.html',
      link: function postLink(scope, element) {

        element.addClass('hellooooo');

        var timing,
            timingEffect,
            timingEffectDivideBy = 4;

        if (scope.timing) {
          timing = scope.timing;
          timingEffect = timing / timingEffectDivideBy;
        } 
        else {
          timing = 5000;
          timingEffect = timing / timingEffectDivideBy / timingEffectDivideBy * 2;
        }

        scope.$watch(element, function(){

          var list = element.find('ul'),
              items = element.find('li'),
              item1;

          if(items.length) {

            console.info(items.length + ' items in ticker');

            $interval(function(){

              items = element.find('li');
              item1 = angular.element(items[0]);

              item1.addClass('fade-out minus-margin-top');

              setTimeout(function(){
                item1.removeClass('fade-out minus-margin-top');
                list.append(item1);
                item1.addClass('fade-out');

                setTimeout(function(){
                  items.removeClass('fade-out');
                }, timingEffect);

              }, timingEffect);

            }, timing);

          } 
          else {
            console.error('angularTicker error - no items assigned! \n Ensure that you have the correct value assigned to tickeritems. Eg: \n <ticker tickeritems="myTickerItems"></ticker> \n $scope.myTickerItems = [ {...}, {...} ];');
          }

        });

      }

    };
  });
