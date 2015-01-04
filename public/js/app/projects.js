// CLIENT SAMPLES 
// OVERLAYS 

var app = require('../lib/app.js'),
	$ = require('jquery'),
	Parallax = require('../lib/canvas/parallax.js'),
	Ticker = require('../lib/canvas/ticker.js'),
	labelHeight,
	linkHeight,
	headlines = [];

var velocities = [{
	'direction': 1,
	'speed': 20 + Math.random() * 20
}, {
	'direction': -1,
	'speed': 20 + Math.random() * 20
}, {
	'direction': 1,
	'speed': 20 + Math.random() * 20
}, {
	'direction': -1,
	'speed': 20 + Math.random() * 20
}];

var options = {
	'parallax': {
		'background-color': '#281928',
		'sourceSet': [
			'/images/portfolio/bg-desktop.png'
		],
		'refresh': function(index, c, ct, now) {
			var v = velocities[index],
				w = v.speed * now / 1024,
				dx = v.direction * w % c.width;
			return {
				'tx': dx
			};
		}
	},
	'ticker': {
		'headlines': []
	}
};


function offsetOverlay() {
	labelHeight = parseInt($('.client-label').css('height'), 10);
	linkHeight = $('.client-link').height();

	$('.client-descriptor-wrapper').css({
		'top': -labelHeight
	});
}

function registerHandlers() {
	$('.client-link').on('click', function(e) {
		var descriptor = $(this).find('.client-descriptor-wrapper');
		if (parseInt(descriptor.css('top'), 10) !== -linkHeight) {
			e.preventDefault();
			descriptor.css('top', -linkHeight);
		}
	});

	$('.client-descriptor-wrapper').hover(function() {
		$(this).css({
			'top': -linkHeight
		});
	}, function() {
		$(this).css({
			'top': -labelHeight
		});
	});
}


$(document).ready(function() {
	app.init();
	registerHandlers();
	var parallax = new Parallax(options.parallax);
	parallax.play();

	$('.ticker-text').each(function() {
		headlines.push($(this).text());
	});
	options.ticker.headlines = headlines;
	var ticker = new Ticker(options.ticker);
	ticker.play();

	offsetOverlay();
	$(window).on('resize', offsetOverlay);
});
