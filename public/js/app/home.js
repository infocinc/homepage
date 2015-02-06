
var app = require('../lib/app.js'),
	$ = require('jquery'),
	registerLinks = require('./servicelink.js');




$(document).ready(function() {
	app.init();
	registerLinks();
});
