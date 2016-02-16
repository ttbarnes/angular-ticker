'use strict';

angular.module('simpleAngularTicker', []).
directive('ticker', function ($interval, $timeout) {
  return {

    restrict: 'A',
    scope: true,
    compile: function () {

      return function (scope, element, attributes) {

        var timing,
        timingEffect,
        timingEffectDivideBy = 4,
        isHovered = false,
        innerTime = false,
        start = false;

        if (attributes.timing) {
          timing = attributes.timing;
          timingEffect = timing / timingEffectDivideBy;
        } else {
          timing = 5000;
          timingEffect = timing / timingEffectDivideBy / timingEffectDivideBy * 2;
        }

        scope.$watch(element, function () {

          var list = element,
          items = element.find('li'),
          itemFirst;


          if (items.length) {
            list.addClass('active');

            start = $interval(function () {

              /*cancel the callback function for fade-out and makes the ticker steady.*/
              if (isHovered) {
                $timeout.cancel(innerTime);
                return;
              }

              items = list.children('li');
              itemFirst = angular.element(items[0]);

              itemFirst.addClass('fade-out minus-margin-top');

              $timeout(function () {
                itemFirst.removeClass('minus-margin-top');
                list.append(itemFirst);

                innerTime = $timeout(function () {
                  items.removeClass('fade-out');
                }, timingEffect);

              }, timingEffect);

            }, timing);

          } else {
            console.warn('no items assigned to ticker! Ensure you have correctly assigned items to your ng-repeat.');
          }

        });

        element.on('$destroy', function () {
          $interval.cancel(start, 0);
        });

        //author - mayo
        element.on('mouseenter', function () {
          isHovered = true;
        });

        //author - mayo
        element.on('mouseleave', function () {
          isHovered = false;
        });

      };
    }

  };
});
