var dsy = require('../lib/dsy'),
	Types = dsy.Field.Types;


var Img  = new dsy.List("Image", {autokey: { from: 'name', path: 'key', unique: true  }});

Img.add( {
	name: { type: String, require: true, noedit: true},
	publishedDate: { type: Date, default: Date.now },
	image: { type: Types.CloudinaryImage }
});
Img.defaultColumns = 'name, publishedDate, folders';

Img.register();
Img.relationship({path: 'folders', ref: 'ImageFolder', refPath: 'images'});
