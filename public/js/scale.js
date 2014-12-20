// SCALING ANIMATION
// LIMITED TO 1 CANVAS FOR NOW
var scale = namespace('ifc.scale'),
    canvas = $('canvas').get(0),
    scaler = {};

scale.init = function(options) {
    var settings = {
        tag: '#hero',
    }

    if (options) {
        $.extend(settings, options);
    }
    scaler.img = new Image();
    scaler.tag = settings.tag;
    scaler.context = canvas.getContext('2d');
    // resize canvas
    $(window).on('resize', function() {
        scale.resize(scale.refreshImage);
    });

    scale.resize(scale.refreshImage)

    scaler.img.onload = function() {
        scale.scaleImage(1, 0, 0);
        setTimeout(function() {
            scale.animate(new Date().getTime());
        }, 500);
    }

}

scale.refreshImage = function(w, h) {
    var imgPath;

    if (w > 991) {
        imgPath = '/images/home/bg-desktop.jpg';
    } else if (w > 767) {
        imgPath = '/images/home/bg-tablet.jpg';
    } else {
        imgPath = '/images/home/bg-mobile.jpg';
    }
    scaler.img.src = imgPath;
}

scale.resize = function(pre, post) {
    var h = $(scaler.tag).height(),
        w = $(window).width();

    if (pre) {
        pre(w, h);
    }

    canvas.width = w;
    canvas.height = h;
    $(scaler.tag).css('width',w);
    if (post) {
        post();
    }
}

scale.animate = function(firstTime) {
    var now = (new Date()).getTime() - firstTime,
        s = Math.sin(Math.PI/2 + now/3000) * 0.10 + 0.90;

    scaler.context.clearRect(0, 0, canvas.width, canvas.height);
    scale.scaleImage(s, 0, 0);

    requestAnimFrame(function() {
        scale.animate(firstTime);
    });
}


scale.scaleImage = function(s, tx, ty) {
    var cw = canvas.width,
        ch = canvas.height,
        w = scaler.img.width,
        h = scaler.img.height,
        sw = s * w,
        sh = s * 0.85 * h,
        tw = (w - sw) / 2,
        th = (h - sh) / 2;

    scaler.context.drawImage(scaler.img, tw, th, sw, sh, 0, 0, cw, ch);
}
