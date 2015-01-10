var $ = require('jquery'),
	utils = require('../app-utils.js');


Background.prototype.startAnimation = function(i, refresh) {
	var c = this.canvas.get(i),
		img = this.images[i],
		ct = c.getContext('2d');

	this.draw(i, c, ct, 0, 0);
	setTimeout(function() {
		var startTime = (new Date()).getTime();
		this.repaint(i, c, ct, startTime, refresh);
	}.bind(this), 10);
}

Background.prototype.loadImages = function(sourceSet, refresh) {
	var that = this;
	for (i = 0; i < sourceSet.length; i++) {
		this.images[i] = new Image();
		this.images[i].src = sourceSet[i];
		this.images[i].onload = function(i) {
			return function() {
				that.startAnimation(i, refresh);
			}
		}(i);
	}
}

///////////////////////////////////////////////
// Resize canvas based upon container dimension
///////////////////////////////////////////////
Background.prototype.resize = function(tag) {
	var h = parseInt($(tag).css('height'), 10),
		w = $(tag).width();

	this.canvas.each(function(i) {
		$(this).attr({
			'width': w,
			'height': h
		});
	});
}

///////////////////////////
// Draw background 
// Repeat pattern if necessary
///////////////////////////

Background.prototype.draw = function(index, c, ct, tx, ty) {
	var cw = c.width,
		ch = c.height,
		img = this.images[index],
		w = img.width,
		h = img.height,
		x = tx,
		y = ty,
		ix = 0,
		iy = 0,
		ry = 0,
		rx = 0,
		ih = h,
		iw = w,
		rw = w,
		rh = h,
		reset, resety,
		paint = true,
		painty = true;

	while (painty) {
		x = tx, ix = 0, iw = w, rw = w, rx = 0;
		reset = false;
		paint = true;
		if (y + h > ch) {
			ry = ih = ch - y;
			rh = (y + h) - ch;
		}
		if (resety) {
			if (y >= ty) {
				painty = false;
			} else if (y + ih > ty) {
				ih = ty - y;
			}
		}
		while (paint) {
			if (x + w > cw) {
				rx = iw = cw - x;
				rw = (x + w) - cw;
			}
			if (reset) {
				if (x >= tx) {
					paint = false;
				} else if (x + iw > tx) {
					iw = tx - x;
				}
			}
			if (paint) {
				ct.drawImage(img, ix, iy, iw, ih, x, y, iw, ih);
				x = x + iw;
				iw = w;
				ix = 0;
			}
			if (x == cw) {
				reset = true;
				x = 0;
				ix = rx;
				iw = rw;
			}
		}
		y = y + ih;
		ih = h;
		iy = 0;
		if (y >= ch) {
			resety = true;
			y = 0;
			iy = ry;
			ih = rh;
		}
	}
}

//////////////////////////////////////
// refresh canvas
//////////////////////////////////////
Background.prototype.repaint = function(index, c, ct, lastTime, refresh) {
	var now = new Date().getTime();

	ct.clearRect(0, 0, c.width, c.height);
	if (typeof refresh === "function") {
		var v = refresh(index, c, ct, now, lastTime);
	}

	this.draw(index, c, ct, v.tx, v.ty);

	utils.requestAnimFrame(function() {
		this.repaint(index, c, ct, now, refresh);
	}.bind(this));
}

Background.prototype.play = function() {
	this.loadImages(this.scene.sourceSet, this.scene.refresh);
}


function Background(scene) {
	if (!(this instanceof Background)) {
		return new Background(scene);
	}

	this.scene = scene;
	this.canvas = $('canvas');
	this.images = [];

	if (this.scene.container) {
		$(window).on('resize', function() {
			this.resize(this.scene.container);
		}.bind(this));
		this.resize(this.scene.container);
	} else {
		console.log('no container found for the animation');
	}
	$(this.canvas.get(0)).css('background', this.scene.background);
}


module.exports = exports = Background;
