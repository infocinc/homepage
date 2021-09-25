// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var express = require('express'),
	app = express(),
	keystone = require('keystone'),
	path = require('path'),
	i18n = require('i18next'),
	debug = require('debug')('main');


// Initialise keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.
keystone.init({
	'name': 'infocinc',
	'brand': 'infocinc',
	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'compress': true,
	'view engine': 'jade',
	'sections': ['contact', 'home', 'timeline', 'services', 'terms'],
	'emails': 'templates/emails',
	'auto update': true,
	'session': true,
	'signout redirect': '/fr/home',
	'signin redirect': '/fr/home',
	'auth': true,
	'signin logo': '/keystone/images/logo.png',
	'user model': 'User',
	'cookie secret': ']>.N%h]>4H_e=(Sifsks!NUPe_tsv=qAGZbqNfI_`B%h:T^JL2r^~)GOdf3/-XU;',
	'model prefix': 'infocinc',
	'mongo': process.env.MONGODB_URI
});

debug('loading models');
/* jshint ignore:start */
keystone.import('models');
/* jshint ignore:end */


// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

// Load i18n options
var options = {
	ns: {
		namespaces: [
			'app', 'home', 'form', 'services',
			'footer', 'terms','contact', 'timeline'
		],
		defaultNs: 'app'
	},
	preload: ['en', 'fr'],
	supportedLngs: ['en', 'fr'],
	setJqueryExt: false,
	load: 'unspecific',
	resSetPath: 'locales/__lng__/__ns__.json',
	detectLngFromPath: 0,
	forceDetectLngFromPath: true,
	fallbackLng: 'en',
	debug: true
};


// Load your project's Routes
keystone.set('routes', require('./routes'));


// Setup common locals for your emails. The following are required by keystone's
// default email templates, you may remove them if you're using your own.
/* jshint ignore:start */
keystone.set('email locals', {
	logo_src: '/images/logo-email.gif',
	logo_width: 194,
	logo_height: 76,
	theme: {
		email_bg: '#f9f9f9',
		link_color: '#2697de',
		buttons: {
			color: '#fff',
			background_color: '#2697de',
			border_color: '#1a7cb7'
		}
	}
});
/* jshint ignore:end*/

// Setup replacement rules for emails, to automate the handling of differences
// between development a production.

// Be sure to update this rule to include your site's actual domain, and add
// other rules your email templates require.


// env specific configuration of keystone
if (keystone.get('env') === 'production') {
	var secureSSL = function(req,res,next) {
		if (req.header('x-forwarded-proto') !== 'https') {
      var sslUrl = ['https://', req.host, req.originalUrl].join('');
      return res.redirect(sslUrl);
		}
		next();		
	};

	keystone.set('secure signin', 'https://www.infocinc.com/keystone/signin');
	keystone.set('back url', 'https://www.infocinc.com/fr/home');

// specific to heroku 
}


// keystone.set('email rules', [{
// 	find: '/images/',
// 	replace: keystone.get('env') === 'production' ? 'https://www.infocinc.com/images/' : 'http://192.168.1.5:3000/images/'
// }, {
// 	find: '/keystone/',
// 	replace: keystone.get('env') === 'production' ? 'https://www.infocinc.com/keystone/' : 'http://192.168.1.5:3000/keystone/'
// }]);

// Load your project's email test routes
keystone.set('email tests', require('./routes/emails'));

// Configure the navigation bar in keystone's Admin UI
keystone.set('nav', {
	'users': 'users',
	'timeline': 'TimeItem',
	'services': 'services',
	'enquiries': 'enquiries',
	'images': 'images'
});

keystone.initExpressApp(app);
keystone.openDatabaseConnection(function() {
    i18n.backend(require('./backend'));
		i18n.init(options);
		i18n.registerAppHelper(app);  
});
keystone.start()

// Start keystone to connect to your database and initialise the web server
// ghost().then(function(ghostServer) {
// 	debug('mounting ghost sever on blog path');
// 	app.use('/blog', ghostServer.rootApp);
//   console.log('env is ' + keystone.get('env'));
//   keystone.initExpressApp(app);
// 	keystone.openDatabaseConnection(function() {
//     i18n.backend(require('./backend'));
// 		i18n.init(options);
// 		i18n.registerAppHelper(app);  
//     ghostServer.start(app);
//   });
// });
// process.on('uncaughtException', function(err) {
// 	console.log('Caught Exception: ' + err);
// });
