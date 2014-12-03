var fs = require('fs'),
	dsy = require('../lib/dsy');

var namespaces = [
		'app','home','form','services',
		'footer','portfolio','terms',
		'contact'
	],
	lngs = ['fr', 'en'],
	resources = [];



function loadResource($ns,$lng) {
	var data = fs.readFileSync('./locales/' + $lng +'/' + $ns + '.json', 'utf8');

	return {
		_id: $ns + '_' + $lng,
		ns: $ns,
		lng:  $lng,
		resource: JSON.stringify(JSON.parse(data)) 
	}
}


var tuples = [];
// create tuples of ns, lng
namespaces.forEach(function(ns) {
	lngs.forEach(function(lng) {
		resources.push(loadResource(ns,lng));
	});
});
console.log(resources);

exports.create = {
	LocaleResource: resources
};



