'use strict';

angular.module('angularTickerApp')
  .directive('ticker', function ($interval) {
    return {

      restrict: 'A',
      scope: true,
      //compile: function (element, attributes) {
      compile: function () {

        return function (scope, element, attributes){

          var timing,
              timingEffect,
              timingEffectDivideBy = 4;

          if (attributes.timing) {
            timing = attributes.timing;
            timingEffect = timing / timingEffectDivideBy;
          } 
          else {
            timing = 5000;
            timingEffect = timing / timingEffectDivideBy / timingEffectDivideBy * 2;
          }

          scope.$watch(element, function(){

            var list = element,
                items = element.find('li'),
                itemFirst;


            if(items.length) {
              list.addClass('activated');

              console.info(items.length + ' items in ticker');

              $interval(function(){

                items = list.children('li');
                itemFirst = angular.element(items[0]);

                itemFirst.addClass('fade-out minus-margin-top');

                setTimeout(function(){
                  itemFirst.removeClass('fade-out minus-margin-top');
                  list.append(itemFirst);
                  itemFirst.addClass('fade-out');

                  setTimeout(function(){
                    items.removeClass('fade-out');
                  }, timingEffect);

                }, timingEffect);

              }, timing);

            }
            else {
              console.error('no items assigned to ticker! Ensure you have correctly assigned items to your ng-repeat.');
            }

          });

        };
      }

    };
  });
