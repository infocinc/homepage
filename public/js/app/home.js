
var	app = require('../lib/app.js'),
	$ = require('jquery'),
	scaler = require('../lib/canvas/scale.js'),
	servicelink = require('./servicelink.js')();


function resizeHeight() {
	$('#main').css('height', $(window).height());
};


$(document).ready(function() {
	app.init();
	scaler.start();
	resizeHeight();
	$(window).on('resize',resizeHeight);
});

