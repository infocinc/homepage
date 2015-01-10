var $ = require('jquery'),
	utils = require('../app-utils.js'),
	_ = require('underscore');


Parallax.prototype.resize = function(canvas, container) {
	var w = container.width(),
		h = parseInt(container.css('height'), 10);

	canvas.each(function(i) {
		$(this).attr({
			'width': w,
			'height': h / $(canvas).length
		});
	});
	this.dim = {
		'w': w,
		'h': h
	};
};

Parallax.prototype.repaint = function(index, c, ct, lastTime, refresh) {
	var now = new Date().getTime();

	ct.clearRect(0, 0, c.width, c.height);

	if (typeof refresh === "function") {
		var v = refresh(index, c, ct, now, lastTime);
	}

	this.draw(index, c, ct, v.tx);

	utils.requestAnimFrame(function() {
		this.repaint(index, c, ct, now, refresh);
	}.bind(this));
};


Parallax.prototype.draw = function(index, c, ct, tx) {
	var cw = c.width,
		ch = c.height,
		x = tx,
		y = 0,
		img = this.images[index],
		w = img.width,
		h = img.height,
		ix = 0,
		iw = w,
		rw = w,
		rx = 0,
		reset,
		paint = true;

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
			ct.drawImage(img, ix, 0, iw, h, x, y, iw, h);
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
};


Parallax.prototype.startAnimation = function(i, refresh) {
	var c = this.canvas.get(i),
		img = this.images[i],
		ct = c.getContext('2d');

	this.draw(i, c, ct, 0, 0);

	setTimeout(function() {
		var startTime = (new Date()).getTime();
		this.repaint(i, c, ct, startTime, refresh);
	}.bind(this), 10);
};


Parallax.prototype.loadImages = function(sourceSet, refresh) {
	var that = this;

	for (i = 0; i < this.canvas.length; i++) {
		this.images[i] = new Image();
		if (sourceSet[i]) {
			this.images[i].src = sourceSet[i];
		} else {
			this.images[i].src = sourceSet[0];
		}
		this.images[i].onload = function(i) {
			return function() {
				that.startAnimation(i, refresh);
			}
		}(i);
	}
};

Parallax.prototype.play = function() {
	this.loadImages(this.settings.sourceSet, this.settings.refresh);
};


function Parallax(options) {
	if (!(this instanceof Parallax)) {
		return new Parallax(options);
	}


	var settings = {
		canvas: $('.parallax'),
		container: $('header')
	};

	this.settings = settings = _.extend(settings, options);

	this.canvas = settings.canvas;
	this.images = [];

	if (settings.sourceSet.length == 0) {
		console.log('No image specified for parallax scroller.');
	}

	this.resize(settings.canvas, settings.container);
	$(window).on('resize', function() {
		this.resize(settings.canvas, settings.container);
	}.bind(this));

	settings.canvas.css('background-color', settings['background-color']);
}


module.exports = exports = Parallax;
