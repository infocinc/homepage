var canvas = $('canvas'),
    images = [];

function startAnimation(i, refresh) {
    var c = canvas.get(i),
        img = images[i],
        ct = c.getContext('2d');

    drawBackground(i, c, ct,0,0);
    setTimeout(function() {
        var startTime = (new Date()).getTime();
        repaint(i, c, ct, startTime, refresh);
    }, 10);
}

function loadImages(sourceSet, refresh) {
    for (i = 0; i < sourceSet.length; i++) {
        images[i] = new Image();
        images[i].src = sourceSet[i];
        images[i].onload = function(i) {
            return function() { startAnimation(i, refresh);};
        }(i);
    }
}


function initScene(scene) {
    resize(scene.container);
    $(window).on('resize', function() {
        resize(scene.container)
    });
    $(canvas.get(0)).css('background', scene.background);
    loadImages(scene.sourceSet, scene.refresh);
}

///////////////////////////////////////////////
// Resize canvas based upon container dimension
///////////////////////////////////////////////
function resize(tag) {
    var h = parseInt($(tag).css('height'), 10),
        w = $(window).width();

    canvas.each(function(i) {
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

function drawBackground(index,c,ct,tx,ty) {
    var cw = c.width, ch = c.height,
        img = images[index],
        w = img.width,h = img.height,
        x = tx, y = ty,
        ix = 0, iy = 0, 
        ry = 0, rx = 0, 
        ih = h ,iw = w,
        rw = w, rh = h, 
        reset,resety,
        paint = true,painty = true;
    
    while(painty) {
        x = tx, ix= 0, iw = w, rw = w, rx = 0;
        reset = false;
        paint = true;
        if (y + h > ch) {
            ry = ih = ch - y;
            rh = (y+h) - ch;
        }
        if (resety) {
            if (y >= ty) {
                painty = false;
            } else if (y + ih > ty) {
                ih = ty - y;
            }
        }
        while(paint) {
                if (x+w > cw) {
                    rx = iw = cw - x;
                    rw = (x+w) - cw;
                }
                if (reset) {
                    if (x >= tx) {
                        paint = false;
                    } else if (x + iw > tx) {
                        iw = tx - x;
                    }
                }
                if (paint) {
                    ct.drawImage(img,ix,iy,iw,ih,x,y,iw,ih);
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
function repaint(index, c, ct, lastTime, refresh) {
    var now = new Date().getTime();

    ct.clearRect(0, 0, c.width, c.height);
    if (typeof refresh === "function") {
        refresh(index, c, ct, now,lastTime);
    }

    requestAnimFrame(function() {
        repaint(index, c, ct, now,refresh);
    });
}
