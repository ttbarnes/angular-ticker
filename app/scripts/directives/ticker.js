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

        //var list = document.getElementsByTagName('ul'),
        //  items = document.getElementsByTagName('li'),
        
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
              items = element.find('li');

          if(items.length) {

            console.info(items.length + ' items in ticker');

            $interval(function(){

              items = element.find('li');

              angular.element(items[0]).addClass('fade-out minus-margin-top');

              setTimeout(function(){
                angular.element(items[0]).removeClass('fade-out minus-margin-top');
                angular.element(list).append(angular.element(items[0]).addClass('fade-out'));

                setTimeout(function(){
                  angular.element(items).removeClass('fade-out');
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
