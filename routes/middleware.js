/**
 * This file contains the common middleware used by your routes.
 * 
 * Extend or replace these functions as your application requires.
 * 
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */

var _ = require('underscore'),
	querystring = require('querystring'),
	dsy = require('../lib/dsy');


/**
	Initialises the standard view locals
	
	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/

exports.initLocals = function(req, res, next) {
	

	var locals = res.locals;
	locals.navLinks = [		
		{ key: 'home',		href: '/welcome.html' },
		{ key: 'blog',		href: '/blog' },
		{ key: 'services',    href: '/services.html'},
		{ key: 'contact',		href: '/contact.html' },
		{ key: 'about',		href: '/about.html' }
	];
	
	locals.user = req.user;
	
	next();
	
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/

exports.flashMessages = function(req, res, next) {
	
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error')
	};
	
	res.locals.messages = _.any(flashMessages, function(msgs) { return msgs.length; }) ? flashMessages : false;
	
	next();
	
};

exports.initErrorHandler = function(req, res, next) {
    
    res.err = function(err,req,res,next) {
		if (dsy.get('logger')) {
			if (err instanceof Error) {
				console.log((err.type ? err.type + ' ' : '') + 'Error thrown for request: ' + req.url);
			} else {
				console.log('Error thrown for request: ' + req.url);
			}
				console.log(err.stack || err);
		}
		var msg = '';
		if (dsy.get('env') === 'development') {
			if (err instanceof Error) {
				if (err.type) {
					msg += '<h2>' + err.type + '</h2>';
				}
				msg += utils.textToHTML(err.message);
			} else if ('object' === typeof err) {
				msg += '<code>' + JSON.stringify(err) + '</code>';
			} else if (err) {
				msg += err;
			}
		} else {
			msg += '<h2>' + "We've been notified about this issue and we'll take a look at it shortly" + '</h2>';
		}
		res.status(500).send(dsy.wrapHTMLError('Sorry, an error occurred loading the page (500)', msg));
	}

    next();
    
};
/**
	Prevents people from accessing protected pages when they're not signed in
 */

exports.requireUser = function(req, res, next) {
	
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/dsy/signin');
	} else {
		next();
	}
	
};
