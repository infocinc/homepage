///////////////////////////////////////////
// HOVER EFFECT ON SERVICE LINK ICONS
//////////////////////////////////////////

var switchimg = function(e, state) {
    function Config(delim, suffix, color, bg) {
        this.delim = delim;
        this.suffix = suffix;
        this.color = color;
        this.background = bg
    }
    var config = state === 'on' ? new Config('.', '-hover', 'white', 'rgb(40,25,40)') : new Config('-', '', 'black', 'white'),
        img = $(this).find('img'),
        tkn = $(img).attr('src').split(config.delim).shift();

    $(img).attr('src', tkn + config.suffix + '.png');
    $(this).css({
        'color': config.color,
        'background': config.background
    });
}

var toggle = function(state) {
    var w = query_screenwidth(app_config['screenwidth-tag']);
    if (isMobile(w)) {
        return null;
    }
    return function(e) {
        $.proxy(switchimg, this)(e, state)
    }
}

function serviceLinkRegister() {
	$(".service-link").hover(toggle('on'), toggle('off'));
}

