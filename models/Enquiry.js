var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Enquiry = new keystone.List("Enquiry", {nocreate: true, track: true});


Enquiry.add({
	name: {type: Types.Name, required: true},
	company: {type: Types.Text, required: true},
	email: {type: Types.Email, required: true},
	phone: {type: String, required: true},
	message: {type: Types.Textarea, required: true},
	timestamp: {type: Date, default: Date.now, format: "Do MMM YYYY, LT", noedit: true}
});

Enquiry.defaultSort = '-timestamp';
Enquiry.defaultColumns = 'name, email|20%, company, timestamp';
Enquiry.register();
