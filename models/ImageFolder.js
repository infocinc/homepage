var dsy = require('../lib/dsy'),
	Types = dsy.Field.Types;

var ImgFolder = new dsy.List("ImageFolder", {autokey: { from: 'name', path: 'key', unique: true  }});

ImgFolder.add( {
	name: { type: String, require: true, noedit: true},
	publishedDate: { type: Date, default: Date.now },
	images: { type: Types.Relationship, ref: 'Image', many: true }
});

ImgFolder.defaultColumns = 'name, publishedDate, images';
ImgFolder.register();
