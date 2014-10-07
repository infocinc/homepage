//////////////////////////////////////////////////////////////////////
// Waypoints handlers
//////////////////////////////////////////////////////////////////////

function navBarResizeHandler(direction) {
    var src;
    var fixedFlag = 'fixed' === $('#fixed-bar').css('position');
    if (!fixedFlag)
        return;

    if (direction === "down") {
        $('#fixed-bar').addClass('navbar-mini');
        navMiniMode = true;
    } else {
        $('#fixed-bar').removeClass('navbar-mini');
        navMiniMode = false;
    }
}
