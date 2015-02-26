var keystone = require('keystone'),
	Resource = new keystone.List('LocaleResource', {nocreate: true, track: true, hidden: true});


Resource.add({
	ns : {type: String, required:true},
	lng: {type: String, required:true},
	resource: {type: String, required: true},
	timestamp: {type: Date, 'default': Date.now, format: 'Do MMM YYYY, LT', noedit: true}
});

Resource.defaultSort = '-timestamp';
Resource.defaultColumns = 'ns, lng|20%, timestamp';
Resource.register();
