require('./servicelink.js')();

var app = require('../lib/app.js'),
	$ = require('jquery'),
	scaler = require('../lib/canvas/scale.js');
	

function resizeHeight() {
	var h = Math.max($(window).height(), $(document).height());
	$('#main').css('height', h);
}


$(document).ready(function() {
	app.init();
	scaler.start();
	resizeHeight();
	$(window).on('resize', resizeHeight);
});
