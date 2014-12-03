var dsy = require('../../lib/dsy'),
	_ = require('underscore'),
	async = require('async');


// HELPERS
// -------------------
function taskFactory(key, options) {
    return function(callback) {
        var q = dsy.list(key).model.find();
        if (options && options.ref) {
            q = q.populate(options.ref)
        }
        q.exec(function(err, results) {
            if (err) {
                callback(err)
            }
            if (options && options.postprocess) {
                results = options.postprocess(results);
            }
            callback(null, results)
        });
    }
}

exports = module.exports = function(req, res) {

	var view = new dsy.View(req, res),
		locals = res.locals,
		section = locals.section = req.params.section || 'home',
		lng = locals.lang = req.params.lng || 'fr';


    if (_.contains(['fr', 'en'], lng) == false || _.contains(dsy.get('sections'), section) == false) {
        res.notfound();
    }

    switch (section) {
        case 'portfolio':
            break;
        case 'about':
            break;
        case 'services':
            async.parallel([
                    taskFactory('Service')
                ],
                function(err, results) {
                    if (err) {
                        console.log('something wrong happened while querying the db')
                    }
                    view.render(section, {
                        services: _.sortBy(results[0],function(s) { return s.row; })
                    });
                });
            break;
        default:
            view.render(section);
    }

};
