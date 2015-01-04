//////////////////////////////////////
// Script code specific to services section
/////////////////////////////////////

var app = require('../lib/app.js'),
	$ = require('jquery'),
	Background = require('../lib/canvas/background.js');

require('./servicelink.js')();
require('scrollTo');
require('easing');
require('bootstrap');

var velocities = [{
		'direction': 1,
		'speed': 90
	}, {
		'direction': -1,
		'speed': 120
	}];


var scene = {
	'container': 'header',
	'background': 'rgb(40,40,40)',
	'sourceSet': [
		'/images/services/axiom-pattern-2.png',
		'/images/services/axiom-pattern-1.png'
	],
	'refresh': function(index, c, ct, now) {
		var v = velocities[index],
			w = v.speed * now / 1024,
			dy = v.direction * (index) * w % c.height,
			dx = v.direction * (1 - index) * w % c.width;

		if (index === 0) {
			var color = 40 + Math.floor(Math.sin(Math.PI / 4 * now / 1024) * 20);
			$(c).css('background', 'rgb(' + 40 + ',' + color + ',' + 40 + ')');
		}
		return {
			'tx': dx,
			'ty': dy
		};
	}
};

$(document).ready(function() {
	app.init();
	var bg = new Background(scene);
	bg.play();
	$('.service-link').scrollTo({
		speed: 800,
		easing: 'easeInOutCubic'
	});


	$('.collapse').on('shown.bs.collapse', function() {
		var top = $(this).offset().top;
		$('html,body').stop().animate({
			scrollTop: top
		}, 800, 'easeInOutCubic');
	});

	$('[data-toggle=collapse]').on('click', function() {
		$(this).children().toggleClass('hide');
	});
});
