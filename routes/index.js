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
	i18n = require('i18next'),
	middleware = require('./middleware'),
	debug = require('debug')('routes'),
	importRoutes = keystone.importer(__dirname);



// Common Middleware
keystone.pre('routes', i18n.handle);
keystone.pre('routes', middleware.initLocals);
keystone.pre('routes', middleware.initErrorHandler);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

keystone.set('404', 'errors/404');
keystone.set('500', function(err,req,res,next) { res.err(err,req,res);});


// Setup Route Bindings
exports = module.exports = function(app) {

	debug('app route bindings');

	function isAuth(req,res) {
		if (!req.user || !req.user.canAccessKeystone) {
			var from = new RegExp('^\/keystone\/?$', 'i').test(req.url) ? '' : '?from=' + req.url;
			return res.redirect(keystone.get('signin url') + from);
		} else {
			return true;
		}
	}

	i18n.serveChangeKeyRoute(app,isAuth)
		.serveRemoveKeyRoute(app,isAuth)
		.serveDynamicResources(app,isAuth);

	i18n.serveWebTranslate(app, {
		i18nextWTOptions: {
			languages: ['fr','en'],
			namespaces: [
				'app','home','form','services',
				'footer','terms','contact','timeline'
			],
			resGetPath: 'locales/resources.json?lng=__lng__&ns=__ns__',
			resChangePath: 'locales/change/__lng__/__ns__',
			resRemovePath: 'locales/remove/__lng__/__ns__',
			fallbackLng: 'en',
			dynamicLoad: true
		},
		authenticated: isAuth
	});
	


	app.all('/canvas-redirect/:canvas', function(req,res) {
		var canvas = req.params.canvas || 'homepage';
		debug('canvas redirect %s',canvas);
		if (canvas === 'blog') {
			res.redirect(303,'/blog');
		} else {
			res.send("<script>top.location='https://www.facebook.com/infocinc/app_712675532159199'</script>");
		}
	});
	
	// Views
	app.all('/:lng/contact', function(req,res) {
		routes.views.contact(req,res);
	});
	// Accept post request for home (Facebook App does a post)
	app.all('/:lng/home', function(req,res) {
		routes.views.index(req,res);
	});

	app.get('/:lng/:section', function(req,res) {
		routes.views.index(req,res);
	});

	app.get('/', function(req,res) {
		res.redirect(301,'/en/home');
	});

	app.get('/welcome.html', function(req,res) {
		res.redirect(301,'/en/home');
	});
};
