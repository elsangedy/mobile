define(function(require) {
  'use strict';

  var module = require('../module');

  module.directive('removeItem', RemoveItem);

  //---

  RemoveItem.$inject = ['$swipe'];

  function RemoveItem($swipe) {

    var directive = {
      restrict: 'EA',
      link: removeItemFn
    };

    return directive;

    //---

    function removeItemFn(scope, ele, attrs, ctrl) {

      var events = {
        start: start,
        move: move,
        end: end,
        cancel: end
      };

      var startX,
          width;

      $swipe.bind(ele, events);

      //---

      function start(coords) {
        ele.css('transition', 'none');

        startX = coords.x;
        width = ele.width();
      }

      //---

      function move(coords) {
        ele.css('transform', 'translateX(' + (coords.x - startX) + 'px)');
      }

      //---

      function end(coords) {
        ele.css('transition', 'all 0.3s linear');

        if((width / 2) < (coords.x - startX)) {
          ele.remove();
        } else {
          ele.css('transform', 'translateX(1px)');
        }
      }

    }

  }

});