(function ($) {
  'use strict';

  /**
   * Makes columns equals.
   */
  Drupal.behaviors.logo = {
    attach: function (context) {

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
    $('.header-inner .js-topbar-search').css('display', 'block');
  });

})(jQuery);
