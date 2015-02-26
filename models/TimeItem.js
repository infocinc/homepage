var keystone = require('keystone'),
	Types = keystone.Field.Types,
	TimeItem = new keystone.List('TimeItem', {autokey: {from: 'name', path: 'key', unique: true}, track: true});

TimeItem.add({
	name: {type:String, required:true},
	image: {type:Types.CloudinaryImage},
	url: {type: Types.Url},
 	icons: {type:Types.CloudinaryImages},
	tags: {type: Types.Text},
	description: {type: Types.Textarea},
	timestamp: {type:Date, 'default': Date.now, format: 'Do MMM YYYY, LT', noedit: true}
});

TimeItem.defaultSort = '-timestamp';
TimeItem.defaultColumns = 'name, index, timestamp';
TimeItem.register();
