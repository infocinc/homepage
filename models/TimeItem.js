var keystone = require('keystone'),
	Types = keystone.Field.Types,
	TimeItem = new keystone.List('TimeItem', {autokey: {from: 'name', path: 'key', unique: true}, track: true});

TimeItem.add({
	date: {type:Date, 'default': Date.now, format: 'YYYY-MM-DD'},
	name: {type:String, required:true},
	image: {type:Types.CloudinaryImage},
	url: {type: Types.Url},
	facebook: {type: Types.Url}
});

TimeItem.defaultSort = '-date';
TimeItem.defaultColumns = 'name, date';
TimeItem.register();
