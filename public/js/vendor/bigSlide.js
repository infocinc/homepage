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
      'speed': '200',
      'activeBtn':'menu-open'
    }, options);

    var menuLink = this,
        menu = $(settings.menu),
        push = $(settings.push),
        width = settings.menuWidth,
        body = $('body');

    var positionOffScreen = {
      'position': 'fixed',
      'top': '0',
      'bottom': '0',
      'width': settings.menuWidth,
      'height': '100%'
    };
    var onScreen = {
      "-webkit-transform": 'translated3d(0,0,0)',
      "transform": 'translate3d(0,0,0)',
      "-ms-transform": 'translate(0,0)'
    };
    var offScreen = {
      "-webkit-transform": 'translated3d(' + width + ',0,0)',
      "transform": 'translate3d(' + width + ',0,0)',
      "-ms-transform": 'translate(' + width + ',0)'
    };
    var pushScreen = {
      "-webkit-transform": 'translated3d(-' + width + ',0,0)',
      "transform": 'translate3d(-' + width + ',0,0)',
      "-ms-transform": 'translate(-' + width + ',0)'
    };

    var easing = 'ease-out';
    var animateSlide = {
      '-webkit-transition': 'all' + ' ' + settings.speed + 'ms' + ' ' + easing ,
      '-moz-transition': 'all' + ' ' + settings.speed + 'ms' + ' ' + easing ,
      '-ms-transition': 'all' + ' ' + settings.speed + 'ms' + ' ' + easing,
      '-o-transition': 'all' + ' ' + settings.speed + 'ms' + ' ' + easing ,
      'transition': 'all' + ' ' + settings.speed + 'ms' + ' ' + easing 
    };
    $('.overlay-open-menu').css('opacity','0');
    $('.overlay-open-menu').css('cursor','auto');
     menu.css(animateSlide);
     menu.css(offScreen);
     push.css(onScreen);
     push.css(animateSlide);

    menu._state = 'closed';

    menu.open = function() {
      menu._state = 'open';
      menu.css(onScreen);
      push.css(pushScreen);
      menuLink.addClass(settings.activeBtn);
      push.bind('touchmove', function(e){e.preventDefault()});
      $('.overlay-open-menu').css({
          'opacity': '0.4',
          'z-index': '1000',
          'cursor': 'pointer'
      });
    };

    menu.close = function() {
      menu._state = 'closed';
      menu.css(offScreen);
      push.css(onScreen);
      menuLink.removeClass(settings.activeBtn);
      push.unbind('touchmove');
      $('.overlay-open-menu').css({
        'opacity': '0',
        'cursor' : 'auto',
        'z-index' : '999'
      });
    };

    var click_handler = function(e) {
      if (menu._state === 'closed') {
        menu.open();
      } else {
        menu.close();
      }
    }

    menuLink.on('click.bigSlide', click_handler);
    $("#remove-btn").on('click.bigSlide', click_handler);

    push.on('click.bigSlide', function(e) {
      var len = $(e.target).closest(menuLink).length;
      if ((len === 0) && (menu._state === 'open')) {
        menu.close();
      }
    });

/*    var clickzone = $(e.target).parents().andSelf();

     if (!$(e.target).parents().andSelf().is(menuLink) && !$(e.target).parents().andSelf().is(menu)
      && menu._state === 'open')  {
       menu.close();
       menuLink.removeClass(settings.activeBtn);
       $('body').css('overflow-y','auto');
       $('.overlay-open-menu').css('opacity','0');
       $('.overlay-open-menu').css('cursor','auto');
     }
*/



    return menu;

  };

}(jQuery));