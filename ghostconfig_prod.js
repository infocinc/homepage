// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/

require('./ghostHelpers')();

var path = require('path'),
	config;

config = {
	// ### Production
	// When running Ghost in the wild, use the production environment
	// Configure your URL and mail settings here
	production: {
		url: 'http://infocinc.com/blog',
		mail: {},
		database: {
			client: 'postgres',
			connection: {
				host: process.env.POSTGRES_HOST,
				user: process.env.POSTGRES_USER,
				password: process.env.POSTGRES_PASSWORD,
				database: process.env.POSTGRES_DATABASE,
				port: '5432'
			},
			debug: false
		},
		fileStorage: false,
		server: {
			// Host to be passed to node's `net.Server#listen()`
			host: process.env.HOST,
			// Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
			port: process.env.PORT
		}
	}
};

// Export config
module.exports = config;
