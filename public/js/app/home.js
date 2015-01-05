
var app = require('../lib/app.js'),
	$ = require('jquery'),
	scaler = require('../lib/canvas/scale.js'),
	registerLinks = require('./servicelink.js');
	

function resizeHeight() {
	var h = Math.max($(window).height(), $(document).height());
	$('#main').css('height', h);
}


$(document).ready(function() {
	app.init();
	registerLinks();
	scaler.start();
	resizeHeight();
	$(window).on('resize', resizeHeight);
});
