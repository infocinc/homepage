/**
 * This file defines the email tests for your project.
 * 
 * Each email test should provide the locals used to render the
 * email template for preview.
 * 
 * Values can either be an object (for simple tests), or a
 * function that calls a callback(err, locals).
 * 
 * Sample generated emails, based on the keys and methods below,
 * can be previewed at /dsy/test-email/{key}
 */

var dsy = require('dsy');

module.exports = {
	
	/** New Enquiry Notifications */
	
	'enquiry-notification': function(req, res, callback) {
		
		// To test enquiry notifications we create a dummy enquiry that
		// is not saved to the database, but passed to the template.
		
		var Enquiry = dsy.list('Enquiry');
		
		var newEnquiry = new Enquiry.model({
			name: { first: 'Test', last: 'User' },
			email: 'contact@my-site.com',
			phone: '+61 2 1234 5678',
			message: 'Nice enquiry notification.'
		});
		
		callback(null, {
			admin: 'Admin User',
			enquiry: newEnquiry,
			enquiry_url: '/dsy/enquiries/'
		});
		
	}
	
};
