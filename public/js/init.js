/*! Copyright 2014 Infocinc (www.infocinc.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
*/

/////////////////////////////////////////////////////////////////////
//  Initialization
//////////////////////////////////////////////////////////////////////

// GLOBAL
var MEDIA_STATE = {},
    INITIALIZED = false;

var app_config = {
    'main-wrapper': '#main',
    'screenwidth-tag': '#media-state',
    'side-menu': true,
    'menu': {
        'side': 'right',
        'anchor': '.menu-link',
        'minisize': '200px',
        'fullsize': '250px'
    }
}


/*function adaptForMobile() {
    site_state = queryMediaState();

    if (site_state === 'MOBILE') {
        $('#fbook-anchor').attr('href', "https://m.facebook.com/pages/infocinc/896328063714402");
        $('#footer-fbook-anchor').attr('href', "https://m.facebook.com/pages/infocinc/896328063714402");
        var viewportHeight = $(window).height();
    }
}
*/

function init_scrolldepth() {
    $.getScript('/js/vendor/jquery.scrolldepth.min.js')
        .done(function(script, status) {
            $.scrollDepth();
        });
}

///////////////////////////////
// detectIE
// no support below IE 9 as of 2014.09.02
///////////////////////////////

function init_sidemenu() {
    var screenwidth = query_screenwidth(app_config['screenwidth-tag']);
    var menu = app_config['menu'],
        link = $(menu['anchor']),
        side = menu['side'],
        size = (screenwidth < SCREEN_WIDTHS.TABLET_PORTRAIT) ? menu['minisize'] : menu['fullsize'];

    link.off('click.bigSlide');
    $(document).off('click.bigSlide');
    link.bigSlide({
        'side': side,
        'menuWidth': size
    });
}

function twitter(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}

function common() {
    twitter(document, 'script', 'twitter-wjs');
    document.addEventListener("touchstart", function() {}, false); // allow css active to work in safari
    register_scrolltos();
    register_waypoints();

    if (app_config['side-menu']) {
        $.getScript('/js/vendor/bigSlide.min.js')
            .done(function(script, textStatus) {
                init_sidemenu();
            })
            .fail(function(jqxhr, settings, exception) {
                console.log("ERROR: failed to load big slide.")
            });
    }
}

function detect_ie() {
    'use strict';
    // Detecting IE
    var old_ie;
    if ($('html').is('.lt-ie9')) {
        old_ie = true;
    }
    if (old_ie) {
        $(app_config['main-wrapper']).css('display', 'none');
    }
    return old_ie;
}

function init() {
    var old_ie = detect_ie();
    if (old_ie) {
        return;
    }
    $.ajaxSetup({
        cache: true
    });

    MEDIA_STATE['init'] = query_screenwidth(app_config['screenwidth-tag']);
    common();
    switch (MEDIA_STATE['init']) {
        case SCREEN_WIDTHS.XSMALL:
        case SCREEN_WIDTHS.MOBILE:
        case SCREEN_WIDTHS.MOBILE_LANDSCAPE:
            ifc.mobile.init();
            ifc.tablet.init();
            break;
        case SCREEN_WIDTHS.TABLET:
            ifc.tablet.init();
            break;
        default:
            ifc.tablet.init();
    }
    init_scrolldepth();
}

function loadScript(name,cb) {
    $.getScript(name)
        .done(function(script,textStatus){
            if (cb)
                cb();
        })
        .fail(function(jqxhr,settings,exception){
            console.log("ERROR: failed to load" + name);
        });
}

require.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 
    }
})
$(document).ready(function() {
    init();
    INITIALIZED = true;
 
    if (section === "home") {
        loadScript("/js/servicelink.min.js",function() {
            serviceLinkRegister();
        });
        loadScript("/js/home.min.js", function() {
            $(window).on('resize', resizeHeight);
            resizeHeight();
        });
        loadScript("/js/scale.min.js", function(){
            ifc.scale.init();
        });
    } else if (section === "contact") {
        loadScript("/js/canvas-utils.min.js", function() {
            loadScript("/js/contact.mins.js", function() {
                initScene(scene);
            });
        });
    } else if (section === "services") {
        loadScript("/js/servicelink.min.js", function() {
            serviceLinkRegister();
        });
        loadScript("/js/canvas-utils.min.js", function() {
            loadScript("/js/services.mins.js", function() {
                serviceLinkRegister();
                initScene(scene);
            });
        });
    } else if (section === "projects") {
        loadScript("/js/parallax.min.js", function() {
            loadScript("/js/projects.min.js")
        });

    }

});
