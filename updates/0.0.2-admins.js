/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 */

// for local dev testing only..

exports.create = {
	User: [
		{ 'name.first': 'Admin', 'name.last': 'User', email: 'supervisor@keystonejs.com', password: 'admin', isAdmin: true }
	]
};
