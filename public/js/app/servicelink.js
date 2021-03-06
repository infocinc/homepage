///////////////////////////////////////////
// HOVER EFFECT ON SERVICE LINK ICONS
//////////////////////////////////////////
var	utils = require('../lib/app-utils.js'),
	$ = require('jquery');

function _switchimg(e, state) {
	function Config(delim, suffix, color, bg) {
		this.delim = delim;
		this.suffix = suffix;
		this.color = color;
		this.background = bg;
	}
	var config = state === 'on' ? new Config('.', '-hover', 'white', 'rgb(40,25,40)') : new Config('-', '', 'black', 'white'),
		img = $(this).find('img'),
		tkn = $(img).attr('src').split(config.delim).shift();

	$(img).attr('src', tkn + config.suffix + '.png');
	$(this).css({
		'color': config.color,
		'background': config.background
	});
}

function _toggle(state) {
	var w = utils.query_screenwidth('#media-state');
	if (utils.isMobile(w)) {
		return null;
	}
	return function(e) {
		$.proxy(_switchimg, this)(e, state);
	};
}

module.exports = function register() {
	$('.service-link').hover(_toggle('on'), _toggle('off'));
};
