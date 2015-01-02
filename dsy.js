// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require dsy
var express = require("express"),
	app = express(),
	dsy = require(__dirname + '/lib/dsy').connect(app),
	compressor = require('node-minify'),
	i18n = require('i18next')


// Initialise dsy with your project's configuration.
// See http://dsyjs.com/guide/config for available options
// and documentation.
dsy.init({
	'name': 'infocinc',
	'brand': 'infocinc',
	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'compress': true,
	'view engine': 'jade',
	'sections': ['contact', 'home', 'projects', 'services', 'terms'],
	'emails': 'templates/emails',
	'auto update': true,
	'session': true,
	'signout redirect': '/fr/home',
	'signin redirect': '/fr/home',
	'auth': true,
	'signin logo': '/dsy/images/logo.png',
	'user model': 'User',
	'cookie secret': ']>.N%h]>4H_e=(Sifsks!NUPe_tsv=qAGZbqNfI_`B%h:T^JL2r^~)GOdf3/-XU;',
	'model prefix': "infocinc",
	'mongo': process.env.MONGOHQ_URL,
	'mandrill api key': process.env.MANDRILL_API_KEY,
	'mandrill username': 'nicolas.dutil@infocinc.com'
});


// compress js script 
/*new compressor.minify({
    type: 'gcc',
    fileIn: ['public/js/vendor/jquery.easing.1.3.js', 'public/js/vendor/bootstrap.js',
    	'public/js/vendor/scrollTo.js', 'public/js/vendor/waypoints.js',
        'public/js/vendor/jquery.scrolldepth.js', 'public/js/utils.js',
        'public/js/mobile.js','public/js/tablet.js','public/js/init.js'
    ],
    fileOut: 'public/js-dist/base-min.js',
    callback: function(err, min) {
      //  console.log(err);
    }
});
*/
dsy.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
dsy.set('locals', {
	_: require('underscore'),
	env: dsy.get('env'),
	utils: dsy.utils,
	editable: dsy.content.editable
});

// Load i18n options
var options = {
	ns: {
		namespaces: [
			'app', 'home', 'form', 'services',
			'footer', 'portfolio', 'terms',
			'contact', 'projects'
		],
		defaultNs: 'app'
	},
	preload: ['en', 'fr'],
	supportedLngs: ['en', 'fr'],
	load: 'unspecific',
	resSetPath: 'locales/__lng__/__ns__.json',
	detectLngFromPath: 0,
	forceDetectLngFromPath: true,
	fallbackLng: 'fr',
	debug: true
}


// Load your project's Routes
dsy.set('routes', require('./routes'));


// Setup common locals for your emails. The following are required by dsy's
// default email templates, you may remove them if you're using your own.
dsy.set('email locals', {
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

// Setup replacement rules for emails, to automate the handling of differences
// between development a production.

// Be sure to update this rule to include your site's actual domain, and add
// other rules your email templates require.


if (dsy.get('env') === 'production') {
	dsy.set('secure signin', 'https://infocinc.herokuapp.com/dsy/signin');
}

dsy.set('email rules', [{
	find: '/images/',
	replace: (dsy.get('env') == 'production') ? 'http://infocinc.herokuapp.com/images/' : 'http://localhost:3000/images/'
}, {
	find: '/dsy/',
	replace: (dsy.get('env') == 'production') ? 'http://infocinc.herokuapp.com/dsy/' : 'http://localhost:3000/dsy/'
}]);

// Load your project's email test routes
dsy.set('email tests', require('./routes/emails'));

// Configure the navigation bar in dsy's Admin UI
dsy.set('nav', {
	'posts': ['posts', 'post-categories'],
	'users': 'users',
	'clients': 'clients',
	'services': 'services',
	'enquiries': 'enquiries',
	'images': 'images'
});

if (dsy.get('env') === 'production') {
	dsy.set('signout redirect', 'http://www.infocinc.com/fr/home');
	dsy.set('back url', 'https://infocinc.herokuapp.com/fr/home');
	dsy.set('secure admin', 'https://infocinc.herokuapp.com');
}

// Start dsy to connect to your database and initialise the web server
var events = {
	'onMount': function() {
		i18n.backend(require('./backend'));
		i18n.init(options);
		i18n.registerAppHelper(app);
	}
}
dsy.start(events);
