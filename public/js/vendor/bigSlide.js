/*! sidemenu - v0.1.0 
 * node module
 * translate3D to use accelerated hardware
 * derived from bigslide
 * Licensed MIT */
/*! bigSlide - v0.5.0 - 2014-09-12
 * http://ascott1.github.io/bigSlide.js/
 * Copyright (c) 2014 Adam D. Scott; Licensed MIT */
/*! bigSlide - v0.4.3 - 2014-01-25
 * http://ascott1.github.io/bigSlide.js/
 * Copyright (c) 2014 Adam D. Scott; Licensed MIT */

var $ = require('jquery'),
    defaults = {
        'nav': ('nav'),
        'push': ('.push'),
        'side': 'left',
        'menuSwitch': '.menu-link',
        'menuWidth': '15.625em',
        'speed': '200',
        'activeBtn': 'menu-open',
        'overlay': '.overlay-menu-open',
        'easing': 'ease-out',
        'closeBtn': '#remove-btn'
    };

// HELPER FUNCTIONS
function translateX(menuState) {
    var w = (menuState === 'shift') ? -this.menuWidth : 0;
    return {
        "-webkit-transform": 'translated3d(' + w + ',0,0)',
        "transform": 'translate3d(' + w + ',0,0)',
        "-ms-transform": 'translate(' + w + ',0)'
    };
}

SideMenu.prototype.open = function() {
    this.state = 'open';

    this.nav.removeClass('invisible');
    this.push.css(translateX('shift'));
    this.menuSwitch.addClass(settings.activeBtn);

    this.push.bind('touchmove', function(e) {
        e.preventDefault()
    });

    this.overlay.css({
        'opacity': '0.4',
        'z-index': '1000',
        'cursor': 'pointer'
    });
};

SideMenu.prototype.close = function() {
    this.state = 'closed';

    this.nav.css(translateX('origin'));
    this.menuSwitch.removeClass(settings.activeBtn);
    this.push.unbind('touchmove');

    this.overlay.css({
        'opacity': '0',
        'cursor': 'auto',
        'z-index': '999'
    });
};

function SideMenu(options) {
    var settings = $.extend(defaults, options),
        animateSlide = {
            '-webkit-transition': 'all' + ' ' + settings.speed + 'ms' + ' ' + settings.easing,
            '-moz-transition': 'all' + ' ' + settings.speed + 'ms' + ' ' + settings.easing,
            '-ms-transition': 'all' + ' ' + settings.speed + 'ms' + ' ' + settings.easing,
            '-o-transition': 'all' + ' ' + settings.speed + 'ms' + ' ' + settings.easing,
            'transition': 'all' + ' ' + settings.speed + 'ms' + ' ' + settings.easing
        };


    this.nav = $(settings.nav);
    this.push = $(settings.push);
    this.overlay = $(settings.overlay);
    this.menuSwitch = $(settings.menuSwitch);
    this.closeBtn = $(settings.closeBtn);
    this.width = settings.menuWidth;
    this.state = 'closed';

    this.body = $('body');

    this.overlay.css({
        'opacity': '0',
        'cursor': 'auto'
    });

    this.push.css(animateSlide);
    this.push.css(translateX(0));



    var clickHandler = function(e) {
        if (this.state === 'closed') {
            this.open();
        } else {
            this.close();
        }
    }.bind(this);

    var pushHandler = function(e) {
        var len = $(e.target).closest(menuSwitch).length;
        if ((len === 0) && (this.state === 'open')) {
            menu.close();
        }
    }.bind(this);

    // register handlers
    this.push.on('click.SideMenu', pushHandler);
    this.menuSwitch.on('click.SideMenu', clickHandler);
    this.closeBtn.on('click.SideMenu', clickHandler);

}

exports = module.exports = SideMenu;
