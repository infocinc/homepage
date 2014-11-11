// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var express = require("express"),
	app = express(),
	keystone = require('keystone').connect(app),
	compressor = require('node-minify'),
    i18n = require('i18next')


// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.
keystone.init({
	'name': 'infocinc',
	'brand': 'infocinc',
	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',
	'emails': 'templates/emails',
	'auto update': true,
	'session': true,
	'signout redirect': '/fr/home',
	'auth': true,
	'user model': 'User',
	'cookie secret': ']>.N%h]>4H_e=(Sifsks!NUPe_tsv=qAGZbqNfI_`B%h:T^JL2r^~)GOdf3/-XU;',
	'mongo' : process.env.MONGOHQ_URL,
	'mandrill api key': process.env.MANDRILL_API_KEY,
	'mandrill username': 'nicolas.dutil@infocinc.com'
});


// compress js script 
new compressor.minify({
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

keystone.import('models');

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
	preload: ['en','fr'],
	supportedLngs: ['en','fr'],
	load: 'unspecific',
	ns: {
		namespaces: [
			'app','home','form','services',
			'footer','portfolio','terms',
			'contact'
		],
		defaultNs: 'app'
	},
	detectLngFromPath: 0,
	forceDetectLngFromPath: true,
	fallbackLng: 'fr',
	debug: true
}

i18n.init(options);
i18n.registerAppHelper(app);
// Load your project's Routes
keystone.set('routes', require('./routes'));


// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.
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

// Setup replacement rules for emails, to automate the handling of differences
// between development a production.

// Be sure to update this rule to include your site's actual domain, and add
// other rules your email templates require.

keystone.set('email rules', [{
	find: '/images/',
	replace: (keystone.get('env') == 'production') ? 'http://www.infocinc.com/images/' : 'http://localhost:3000/images/'
}, {
	find: '/keystone/',
	replace: (keystone.get('env') == 'production') ? 'http://www.infocinc.com/keystone/' : 'http://localhost:3000/keystone/'
}]);

// Load your project's email test routes
keystone.set('email tests', require('./routes/emails'));

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	'posts': ['posts', 'post-categories'],
	'users': 'users'
});

// Start Keystone to connect to your database and initialise the web server
keystone.start();
