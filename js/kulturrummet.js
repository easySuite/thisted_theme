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
      $(function() {
        var searchBtn = $('.topbar-link-search', context);

        if (searchBtn.is('.active')) {
          searchBtn.click();
        }
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
          var menu = $('.main-menu-wrapper > .main-menu', context),
            subMenu = menu.find('.expanded .main-menu'),
            subMenuTotalHeight = 0;

          // Reset height
          menu.parent().height('auto');

          subMenu.each(function () {
            var el = $(this);
            if (el.is(':visible')) {
              el.css('top', el.parents('.main-menu:first').height());
              subMenuTotalHeight += el.height();

              if ($(document).width() >= 740 - (window.innerWidth - $(document).width())) {
                // Set recalculated height to menu wrapper
                menu.parent().height(menu.innerHeight() + subMenuTotalHeight);
              }
            }
          });
        }

        // Menu initialisation
        menuHeight();

        $(window).resize(function() {
          menuHeight();
        });
      });
    }
  };
})(jQuery);
