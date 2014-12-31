///////////////////////////////////////////////////////////////////////////
// Google Analytics & FB SDK
///////////////////////////////////////////////////////////////////////////


exports.create_event = function(label, value, url) {
    e = {
        'hitType': 'event',
        'eventCategory': 'button',
        'eventAction': 'click',
        'eventLabel': label,
        'eventValue': value,
        'page': url,
        'nonInteraction': false
    }
    return e;
}


/*ganal.track = function(sel,event) {
    var path = document.location.pathname;
    $(sel).on(event, function() {
        eo = ganal.create_event('nav-button', 1, path);
        ga('send', eo);
    });
    $('#navbar-collapse a').on('click', function(e) {
        var navitem = $(e.target).text().toLowerCase() + '-menuitem';
        eo = ganal.create_event(navitem, 1, path);
        ga('send', eo);
    });
}
*/