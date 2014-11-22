var dsy = require('../../lib/dsy'),
	_ = require('underscore');

exports = module.exports = function(req, res) {

	var view = new dsy.View(req, res),
		locals = res.locals;

	locals.section = req.params.section || 'home';
	locals.lang = req.params.lng || 'fr';

// find all images that belong to section
// names are given in jade file
// names should not change in admin ui
// images['test']

	// locales.images 
	// Render the view
	dsy.list('ImageFolder')
		.model.findOne({name:locals.section},'images')
		.populate('images')
		.exec(function(err, results) {
			if (err instanceof Error) {
				res.err(err,'',err.message);
			} else if (err) {
				res.err(err,'','something happened while querying the db');
			}
			var _imgs = results ? _.indexBy(results.images,'key') : ' ';
			console.log(_imgs);
			view.render(locals.section, {
				imgs: _imgs
			});
		});

};
