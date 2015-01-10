var $ = require('jquery'),
	utils = require('../app-utils.js'),
	_ = require('underscore');

///////////////////////////////////////////////
// Resize canvas based upon container dimension
///////////////////////////////////////////////

Ticker.prototype.resize = function(canvas, container) {
	var w = container.width(),
		h = parseInt(container.css('height'), 10),
		ct = canvas.get(0).getContext('2d');

	canvas.each(function(i) {
		$(this).attr({
			'width': w,
			'height': h
		});
	});
	ct.font = h / 5 + "px Time Square";
	ct.fillStyle = "yellow";
	this.dim = {
		'w': w,
		'h': h
	};
}

//////////////////////////////////////
// refresh canvas
//////////////////////////////////////

Ticker.prototype.repaint = function(id, lastTime, tx) {
	var now = (new Date()).getTime(),
		settings = this.settings,
		c = settings.canvas.get(0),
		ct = c.getContext('2d'),
		delta = settings.speed * (now - lastTime) / 1000,
		tx = tx - delta;

	ct.clearRect(0, 0, c.width, c.height);

	if (tx + this.txtMeasures[id] > 0) {
		ct.fillText(settings.headlines[id], tx, this.dim.h / 2);
	} else {
		tx = c.width;
		id = (id + 1) % settings.headlines.length;
	}

	utils.requestAnimFrame(function() {
		this.repaint(id, now, tx);
	}.bind(this));
}

Ticker.prototype.play = function() {
	setTimeout(function() {
		this.repaint(0, new Date().getTime(), this.canvas.width());
	}.bind(this), 10);
}


function Ticker(options) {
	if (!(this instanceof Ticker)) {
		return new Ticker(options);
	}

	var settings = {
		canvas: $('.ticker'),
		container: $('header'),
		headlines: [],
		speed: '300',
		props: {
			'textAlign': 'left',
			'textBaseline': 'middle',
			'fillStyle': 'yellow'
		}
	};

	this.settings = settings = _.extend(settings, options);

	this.txtMeasures = [];
	this.canvas = settings.canvas;

	this.resize(settings.canvas, settings.container);
	$(window).on('resize', function() {
		this.resize(settings.canvas, settings.container);
	}.bind(this));

	var ct = settings.canvas.get(0).getContext('2d');
	ct.textAlign = 'left';
	ct.textBaseline = 'middle';
	ct.fillStyle = 'yellow';
	//_.extend(ct, settings.props);

	settings.headlines.forEach(function(value, index) {
		this.txtMeasures[index] = ct.measureText(value).width;
	}.bind(this));
}

module.exports = exports = Ticker;
