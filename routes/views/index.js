var dsy = require('../../lib/dsy');

exports = module.exports = function(req, res) {

	var view = new dsy.View(req, res),
		locals = res.locals;

	locals.section = req.params.section || 'home';
	locals.lang = req.params.lng || 'fr';
	
	// Render the view
	view.render(locals.section);
};
