// CLIENT SAMPLES
// OVERLAYS

var app = require('../lib/app.js'),
	$ = require('jquery'),
	labelHeight,
	linkHeight;


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
	offsetOverlay();
	$(window).on('resize', offsetOverlay);
});
