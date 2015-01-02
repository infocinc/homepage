/*! Copyright 2014 Infocinc (www.infocinc.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
*/

/////////////////////////////////////////////////////////////////////
//  Initialization
//////////////////////////////////////////////////////////////////////

// GLOBAL
require('modernizr');

var utils = require('./app-utils.js'),
	SideMenu = require('./sidemenu.js'),
	$ = require('jquery');

var MEDIA_STATE = {},
	notouch = $('html').hasClass('no-touch');

var app_config = {
	'main-wrapper': '#main',
	'screenwidth-tag': '#media-state',
	'side-menu': true,
	'menu': {
		'side': 'right',
		'anchor': '.menu-link',
		'minisize': '250px',
		'fullsize': '250px'
	}
}


//////////////////////////////////////////////////////////////////////////////////
// Enquire registering
//////////////////////////////////////////////////////////////////////////////////

function configure_enquire() {
	var _switch = false,
		_animating;

	enquire.register("screen and (min-width:768px)", {

		deferSetup: true,
		setup: function() {
			if (notouch) {
				utils.add_interaction('#footer-contact a, #footer-community a,' +
					'#footer-nav a', 'hover-underline');
				utils.add_interaction('.center-navigation a', 'navbox-hover');
				utils.add_interaction('.services', function() {
					if (_animating) {
						$(_animating).stop();
					}
					_animating = this;
					var _bgPos = parseInt($(this).css('background-position')),
						_duration = (100 - _bgPos) * 140;

					$(this).animate({
						'background-position': '100%'
					}, {
						duration: _duration,
						queue: false,
						easing: 'linear',
						complete: function() {
							_animating = undefined;
							$(this).css('background-position', '0%');
						}
					});
				});
			}
		},
		unmatch: function() {
			_switch = true;
			if (app_config['side-menu']) {
				init_sidemenu();
			}
		},
		match: function() {
			if (_switch || utils.isMobile(MEDIA_STATE['init']) && app_config['side-menu']) {
				init_sidemenu();
			}
		}
	});
}

function detect_features(complete) {
	var load = [{
		test: window.matchMedia,
		nope: "/js/vendor/matchMedia.min.js"
	}, {
		test: window.matchMedia.addListener,
		nope: "/js/vendor/matchMedia.addListener.min.js"
	}, {
		both: ['/js/vendor/enquire.min.js'],
		complete: function() {
			complete();
		}
	}];
	Modernizr.load(load);
}

///////////////////////////////
// detectIE
// no support below IE 9 as of 2014.09.02
///////////////////////////////

function init_sidemenu() {
	var screenwidth = utils.query_screenwidth(app_config['screenwidth-tag']);
	var menu = app_config['menu'],
		link = $(menu['anchor']),
		side = menu['side'],
		size = (screenwidth < utils.SCREEN_WIDTHS.TABLET_PORTRAIT) ? menu['minisize'] : menu['fullsize'];

	link.off('click.SideMenu');
	$(document).off('click.SideMenu');
	var sidemenu = new SideMenu({
		'side': side,
		'width': size
	});
	sidemenu.registerHandlers();
}

function initTwitter() {
	window.twttr = (function(d, s, id) {
		var t, js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {
			return
		}
		js = d.createElement(s);
		js.id = id;
		js.src = "https://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js, fjs);
		return window.twttr || (t = {
			_e: [],
			ready: function(f) {
				t._e.push(f)
			}
		})
	}(document, "script", "twitter-wjs"));
}

exports.init = function() {
	MEDIA_STATE['init'] = utils.query_screenwidth(app_config['screenwidth-tag']);
	initTwitter();
	if (app_config['side-menu']) {
		init_sidemenu();
	}

	switch (MEDIA_STATE['init']) {
		case utils.SCREEN_WIDTHS.XSMALL:
		case utils.SCREEN_WIDTHS.MOBILE:
		case utils.SCREEN_WIDTHS.MOBILE_LANDSCAPE:
			detect_features(configure_enquire);
			break;
		case utils.SCREEN_WIDTHS.TABLET:
			detect_features(configure_enquire);
			break;
		default:
			detect_features(configure_enquire);
	}
	//    init_scrolldepth();
}
