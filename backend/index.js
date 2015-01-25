var keystone = require('keystone'),
    Resource = keystone.list('LocaleResource');

// helpers


module.exports = {

    saveResourceSet: function($lng, $ns, resourceSet, cb) {
        var toSave = {
            _id : $ns + '_' + $lng,
            ns : $ns,
            lng : $lng,
            resource: JSON.stringify(resourceSet)
        };

        var errorHandler = function errorHandler(err) {
            if (err) {
                console.log(err);
                cb(err);
            } else {
                cb(null,{});
            }
        };

        Resource.model.find()
            .where('lng').equals($lng)
            .where('ns').equals($ns)
            .exec(function(err, obj) {
                if (err) {
                    cb(err);
                } else {
                    var resource = !obj ? new Resource.model() : obj[0];
                    var updater = resource.getUpdateHandler({});
                    updater.options.errorMessage = 'Failed to save local resources!';
                    updater.process(toSave, errorHandler);
                }
            });
    },

    fetchOne: function(lng, ns, cb) {
        var _oid = ns + '_' + lng;
        var self = this;


        Resource.model.find()
            .where('lng').equals(lng)
            .where('ns').equals(ns)
            .exec(function(err, obj) {
            if (err) {
                cb(err);
            } else {
                if (!obj) {
                    cb(null, {});
                } else {
                    self.functions.log('loaded from mongoDb: ' + _oid);
                    cb(null, JSON.parse(obj[0].resource));
                }
            }
        });
    },

    saveMissing: function(lng, ns, key, defaultValue, callback) {
        // add key to resStore
        var keys = key.split(this.options.keyseparator);
        var x = 0;
        var value = this.resStore[lng][ns];
        while (keys[x]) {
            if (x === keys.length - 1) {
                value = value[keys[x]] = defaultValue;
            } else {
                value = value[keys[x]] = value[keys[x]] || {};
            }
            x++;
        }

        var self = this;
        this.saveResourceSet(lng, ns, this.resStore[lng][ns], function(err) {
            if (err) {
                self.functions.log('error saving missingKey `' + key + '` to mongoDb');
            } else {
                self.functions.log('saved missingKey `' + key + '` with value `' + defaultValue + '` to mongoDb');
            }
            if (typeof callback === 'function') callback(err);
        });
    },

    postChange: function(lng, ns, key, newValue, callback) {
        var self = this;

        this.load([lng], {
            ns: {
                namespaces: [ns]
            }
        }, function(err, fetched) {
            // change key in resStore
            var keys = key.split(self.options.keyseparator);
            var x = 0;
            var value = fetched[lng][ns];
            while (keys[x]) {
                if (x === keys.length - 1) {
                    value = value[keys[x]] = newValue;
                } else {
                    value = value[keys[x]] = value[keys[x]] || {};
                }
                x++;
            }

            self.saveResourceSet(lng, ns, fetched[lng][ns], function(err) {
                if (err) {
                    self.functions.log('error updating key `' + key + '` to mongoDb');
                } else {
                    self.functions.log('updated key `' + key + '` with value `' + newValue + '` to mongoDb');
                }
                if (typeof callback === 'function') callback(err);
            });
        });
    },

    postRemove: function(lng, ns, key, callback) {
        var self = this;

        this.load([lng], {
            ns: {
                namespaces: [ns]
            }
        }, function(err, fetched) {
            // change key in resStore
            var keys = key.split(self.options.keyseparator);
            var x = 0;
            var value = fetched[lng][ns];
            while (keys[x]) {
                if (x === keys.length - 1) {
                    delete value[keys[x]];
                } else {
                    value = value[keys[x]] = value[keys[x]] || {};
                }
                x++;
            }

            self.saveResourceSet(lng, ns, fetched[lng][ns], function(err) {
                if (err) {
                    self.functions.log('error removing key `' + key + '` to mongoDb');
                } else {
                    self.functions.log('removed key `' + key + '` to mongoDb');
                }
                if (typeof callback === 'function') callback(err);
            });
        });
    }

};
