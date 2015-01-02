// SCALING ANIMATION
// LIMITED TO 1 CANVAS FOR NOW
var $ = require('jquery'),
    canvas = $('canvas').get(0),
    scaler = {};


 function refreshImage(w, h) {
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

function resize(pre, post) {
    var h = $(scaler.tag).height(),
        w = $(window).width();

    if (pre) {
        pre(w, h);
    }

    canvas.width = w;
    canvas.height = h;
//    $(scaler.tag).css('width',w);
    if (post) {
        post();
    }
}

function animate(firstTime) {
    var now = (new Date()).getTime() - firstTime,
        s = Math.sin(Math.PI/2 + now/3000) * 0.10 + 0.90;

    scaler.context.clearRect(0, 0, canvas.width, canvas.height);
    scaleImage(s, 0, 0);

    requestAnimFrame(function() {
        animate(firstTime);
    });
}


function scaleImage(s, tx, ty) {
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

exports.start = function(options) {
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
        resize(refreshImage);
    });

    resize(refreshImage)

    scaler.img.onload = function() {
        scaleImage(1, 0, 0);
        setTimeout(function() {
            animate(new Date().getTime());
        }, 500);
    }

}
