var keystone = require('keystone'),
	Types = keystone.Field.Types,
	Service = new keystone.List('Service', {nocreate: false, track: true});


Service.add({
	name: {type:String, required:true},
	icon: {type: Types.CloudinaryImage},
	bubbles: {type: Types.CloudinaryImages},
	row: {type: Types.Number},
	target: {type: Types.Url},
	timestamp: {type: Date, 'default': Date.now, format: 'Do MMM YYYY, LT', noedit: true}
});

Service.defaultSort = '-timestamp';
Service.defaultColumns = 'name, timestamp';
Service.register();
