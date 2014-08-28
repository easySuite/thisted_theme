(function ($) {
  'use strict';

  /**
   * Makes columns equals.
   */
  Drupal.behaviors.logo = {
    attach: function (context) {

      $(window).load(function() {

        // Calculates highest dom element.
        function equalHeights(el1, el2) {
          var innerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            currentWidth = $(document).width(),
            scrollWidth = Math.abs(innerWidth - $(document).width()),
            max = Math.max(el1.outerHeight(true), el2.outerHeight(true));

          // Set same height for 2 elements.
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
   * Multilevel menu.
   */
  Drupal.behaviors.multiLevelMenu = {
    attach: function (context) {
      $(function() {
        // Submenu top position.
        function menuHeight() {
          var innerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            menu = $('.main-menu-wrapper > .main-menu', context),
            subMenu = menu.find('.expanded  > .main-menu'),
            subMenuTotalHeight = 0;

          // Reset height.
          menu.parent().height('auto');

          subMenu.each(function () {
            var el = $(this);
            if (el.is(':visible')) {
              el.css('top', el.parents('.main-menu:first').height());
              subMenuTotalHeight += el.height();

              if ($(document).width() >= 740 - Math.abs((innerWidth - $(document).width()))) {
                // Set recalculated height to menu wrapper.
                menu.parent().height(menu.innerHeight() + subMenuTotalHeight);
              }
            }
          });
        }

        // Menu initialisation.
        menuHeight();

        $(window).resize(function() {
          menuHeight();
        });
      });
    }
  };


  /**
   * On document ready.
   */
  $(function() {
    // Unhide search form.
    $('.js-topbar-search').css('display', 'block');
  });

})(jQuery);
