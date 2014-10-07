var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals,
		lng = req.query.setLng,
		page = locals.page = {};

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	// Render the view
	if (lng === undefined) {
		locals.lang = "fr"
	} else {
		locals.lang = lng.split('-')[0];

	}

	view.render('index');
};
