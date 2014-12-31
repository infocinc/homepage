/////////////////////////////////////////////////////////////////////////
// Mobile Init
/////////////////////////////////////////////////////////////////////////
var mobile = namespace('ifc.mobile');


mobile.bind_clickhandlers = function() {
    $('#arrow-up-anchor').on('click', function(e) {
        e.preventDefault();
        var loc = window.location;
        window.location.href = '#';
        if (history.pushState) {
            history.pushState("", document.title, loc.pathname);
        }
    });
}


mobile.init = function() {    
    mobile.bind_clickhandlers();
}
