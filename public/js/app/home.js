
var app = require('../lib/app.js'),
	$ = require('jquery');




$(document).ready(function() {
	app.init();
	// sets hero background image to the height of the window.
	$('#hero').height($(window).height());
	$(window).on('resize', function(e) {
		$('#hero').height($(this).height());		
	});
});
