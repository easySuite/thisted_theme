(function ($) {
  'use strict';

  /**
   * Makes columns equals.
   */
  Drupal.behaviors.logo = {
    attach: function (context) {

      $(window).load(function() {

        // Calculates highest dom element

        function equalHeights(el1, el2) {
          var currentWidth = $(document).width(),
            scrollWidth = window.innerWidth - $(document).width(),
            max = Math.max(el1.outerHeight(true), el2.outerHeight(true));

          // Set same height for 2 elements
          if (currentWidth > (768 - scrollWidth)) {
            el1.height('auto').height(max);
            el2.height('auto').height(max);
          } else {
            leftCol.height('auto');
            rightCol.height('auto');
          }
        }

        var leftCol = $('.panel-2col .panel-col-first', context),
          rightCol = $('.panel-2col .panel-col-last', context);

        equalHeights(leftCol, rightCol);

        $(window).resize(function() {
          equalHeights(leftCol, rightCol);
        });
      });
    }
  };

  /**
   * Collapsing search form by default.
   */
  Drupal.behaviors.search = {
    attach: function (context) {
      $('.topbar-link-search', context).click();
    }
  };
})(jQuery);
