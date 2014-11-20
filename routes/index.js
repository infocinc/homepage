/**
 * This file is where you define your application routes and controllers.
 * 
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 * 
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 * 
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 * 
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 * 
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var _ = require('underscore'),
	keystone = require('keystone'),
	i18n = require("i18next"),
	middleware = require('./middleware'),
	importRoutes = keystone.importer(__dirname);



// Common Middleware
keystone.pre('routes',i18n.handle);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);


keystone.set('404', function(req,res,next) {
	res.notfound();
});

keystone.set('500',function(err,req,res,next) {
	var title, message;
	if (err instanceof Error) {
		message = err.message;
		err = err.stack;
	}
	res.err(err,title,message);
});

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {

	i18n.serveChangeKeyRoute(app)
		.serveRemoveKeyRoute(app)
		.serveDynamicResources(app);

	i18n.serveWebTranslate(app, {
		i18nextWTOptions: {
			languages: ['fr','en'],
			namespaces: [
				'app','home','form','services',
				'footer','portfolio','terms',
				'contact'
			],
			resGetPath: 'locales/resources.json?lng=__lng__&ns=__ns__',
			resChangePath: 'locales/change/__lng__/__ns__',
			resRemovePath: 'locales/remove/__lng__/__ns__',
			fallbackLng: "fr",
			dynamicLoad: true
		}
	});
	// Views
	app.all('/:lng/contact', function(req,res) {
		routes.views.contact(req,res);
	});

	app.get('/:lng/:section', function(req,res) {
		console.log('hi');
		routes.views.index(req,res);
	});


	app.get('/', function(req,res) {
		res.redirect(301,'/fr/home');
	});

	app.get('/welcome.html', function(req,res) {
		res.redirect(301,'/en/home');
	});

	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
};
