var dsy = require('../lib/dsy'),
	Types = dsy.Field.Types;

var Client = new dsy.List("Client", {autokey: {from: 'name', path: 'key', unique: true}, track: true});


Client.add({
	name: {type:String, required:true},
	image: {type:Types.CloudinaryImage},
	tag_images: {type:Types.CloudinaryImages},
	image_url: {type: Types.Url},
	index: {type: Types.Number},
	tags: {type: Types.Text},
	timestamp: {type: Date, default: Date.now, format: "Do MMM YYYY, LT", noedit: true}
});

Client.defaultSort = '-timestamp';
Client.defaultColumns = 'name, index, timestamp';
Client.register();
