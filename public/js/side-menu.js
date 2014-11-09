function sidemenu() {
    var screenwidth = query_screenwidth(app_config['screenwidth-tag']);
    var menu = app_config['menu'],
        link = $(menu['anchor']),
        side = menu['side'],
        size = (screenwidth < SCREEN_WIDTHS.TABLET_PORTRAIT) ? menu['minisize'] : menu['fullsize'];

    console.log('calling bigSlide script with width ' + size);
    link.off('click.bigSlide');
    $(document).off('click.bigSlide');
    link.bigSlide({
        'side': side,
        'menuWidth': size
    });
}

function register(enquire) {
    enquire.register("screen and (min-width:768px)", {
        unmatch: function() {
            init_sidemenu();
        },

        match: function() {
            if (_switch) {
                init_sidemenu();
            }
        }
    });
}
