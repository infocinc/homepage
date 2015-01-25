var keystone = require('keystone'),
	Types = keystone.Field.Types;


var Img  = new keystone.List("Image", {autokey: { from: 'name', path: 'key', unique: true  }});

Img.add( {
	name: { type: String, require: true, noedit: true},
	publishedDate: { type: Date, default: Date.now },
	image: { type: Types.CloudinaryImage }
});
Img.defaultColumns = 'name, publishedDate';

Img.register();
