var dsy = require('../lib/dsy'),
	Types = dsy.Field.Types;

var Service = new dsy.List("Service", {nocreate: false, track: true});


Service.add({
	name: {type:String, required:true},
	icon: {type: Types.CloudinaryImage},
	bubbles: {type: Types.CloudinaryImages},
	row: {type: Types.Number},
	timestamp: {type: Date, default: Date.now, format: "Do MMM YYYY, LT", noedit: true}
});

Service.defaultSort = '-timestamp';
Service.defaultColumns = 'name, timestamp';
Service.register();
