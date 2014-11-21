var keystone = require('../../');

exports = module.exports = function(req,res) {

	keystone.render(req,res, 'webtranslate', {
		section: 'webtranslate',
		page: 'webtranslate'
	});

}
