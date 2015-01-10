
var app = require('../lib/app.js'),
	$ = require('jquery'),
	scaler = require('../lib/canvas/scale.js'),
	registerLinks = require('./servicelink.js');
	



$(document).ready(function() {
	app.init();
	registerLinks();
	scaler.start();
});
