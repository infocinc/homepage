/*! bigSlide - v0.5.0 - 2014-09-12
* http://ascott1.github.io/bigSlide.js/
* Copyright (c) 2014 Adam D. Scott; Licensed MIT */
/*! bigSlide - v0.4.3 - 2014-01-25
* http://ascott1.github.io/bigSlide.js/
* Copyright (c) 2014 Adam D. Scott; Licensed MIT */

(function($) {
  'use strict';

  $.fn.bigSlide = function(options) {

    var settings = $.extend({
      'menu': ('#menu'),
      'push': ('.push'),
      'side': 'left',
      'menuWidth': '15.625em',
      'speed': '300',
      'activeBtn':'menu-open'
    }, options);

    var menuLink = this,
        menu = $(settings.menu),
        push = $(settings.push),
        width = settings.menuWidth;

    var positionOffScreen = {
      'position': 'fixed',
      'top': '0',
      'bottom': '0',
      'width': settings.menuWidth,
      'height': '100%'
    };


    var easing = 'cubic-bezier(0.215, 0.610, 0.355, 1.000)';
    var animateSlide = {
      '-webkit-transition': settings.side + ' ' + settings.speed + 'ms' + ' ' + easing + ' ' +'0s',
      '-moz-transition': settings.side + ' ' + settings.speed + 'ms' + ' ' + easing + ' ' + '0s',
      '-ms-transition': settings.side + ' ' + settings.speed + 'ms' + ' ' + easing + ' ' + '0s',
      '-o-transition': settings.side + ' ' + settings.speed + 'ms' + ' ' + easing + ' ' + '0s',
      'transition': settings.side + ' ' + settings.speed + 'ms' + ' ' + easing + ' ' + '0s'
    };
    menu.css(settings.side,"");
    push.css(settings.side,"");
    $('.overlay-open-menu').css('opacity','0');
    $('.overlay-open-menu').css('cursor','auto');
    menu.css(positionOffScreen);
    push.css(settings.side, '0');
    menu.css(animateSlide);
    push.css(animateSlide);

    menu._state = 'closed';

    menu.open = function() {
      menu._state = 'open';
      menu.css(settings.side, '0');
      push.css(settings.side, width);
      menuLink.addClass(settings.activeBtn);
    };

    menu.close = function() {
      menu._state = 'closed';
      menu.css(settings.side, '-' + width);
      push.css(settings.side, '0');
      menuLink.removeClass(settings.activeBtn);
    };

   $(document).on('click.bigSlide', function(e) {
     if (!$(e.target).parents().andSelf().is(menuLink) && !$(e.target).parents().andSelf().is(menu)
      && menu._state === 'open')  {
       menu.close();
       menuLink.removeClass(settings.activeBtn);
       $('body').css('overflow-y','auto');
       $('.overlay-open-menu').css('opacity','0');
       $('.overlay-open-menu').css('cursor','auto');
     }
    });

    menuLink.on('click.bigSlide', function(e) {
      e.preventDefault();
      if (menu._state === 'closed') {
        menu.open();
        $('body').css('overflow','hidden');
        $('body').bind('touchmove', function(e){e.preventDefault()});
        $('.overlay-open-menu').css({
          'opacity': '0.4',
          'cursor': 'pointer'
        });

      } else {
        menu.close();
        $('body').css('overflow-y','auto');
        $('body').unbind('touchmove');
        $('.overlay-open-menu').css('opacity','0');
        $('.overlay-open-menu').css('cursor','auto');
      }
    });

/*    menuLink.on('touchend', function(e){
      menuLink.trigger('click.bigSlide');
      e.preventDefault();
    });
*/
    return menu;

  };

}(jQuery));
