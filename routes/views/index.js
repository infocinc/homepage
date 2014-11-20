var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	locals.section = req.params.section || 'home';
	locals.lang = req.params.lng || 'fr';
	
	// Render the view
	view.render(locals.section);
};
