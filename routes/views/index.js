var keystone = require('keystone'),
    _ = require('underscore'),
    async = require('async');


// HELPERS
// -------------------
function taskFactory(key, options) {
    return function(callback) {
        var q = keystone.list(key).model.find();
        if (options && options.ref) {
            q = q.populate(options.ref);
        }
        q.exec(function(err, results) {
            if (err) {
                callback(err);
            }
            if (options && options.postprocess) {
                results = options.postprocess(results);
            }
            callback(null, results);
        });
    };
}

exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res),
        locals = res.locals,
        section = locals.section = req.params.section || 'home',
        lng = locals.lang = req.params.lng || 'fr';


    if (_.contains(['fr', 'en'], lng) === false || _.contains(keystone.get('sections'), section) === false) {
        locals.section = null;
        return res.render('errors/404');
    }

    switch (section) {
        case 'timeline':
            async.parallel([
                    taskFactory('TimeItem', {
                        'postprocess': function(results) {
                            return _.sortBy(results, function(s) {
                                return s.index;
                            });
                        }
                    })
                ],
                function(err, results) {
                    if (err) {
                        console.log('something wrong happened while querying the db');
                    }
                    view.render(section, {
                        timeItems: results[0]
                    });
                });
            break;
        case 'about':
            break;
        case 'home':
        case 'services':
            async.parallel([
                    taskFactory('Service', {
                        'postprocess': function(results) {
                            return _.sortBy(results, function(s) {
                                return s.row;
                            });
                        }
                    })
                ],
                function(err, results) {
                    if (err) {
                        console.log('something wrong happened while querying the db');
                    }
                    view.render(section, {
                        services: results[0]
                    });
                });
            break;
        default:
            view.render(section);
    }

};
