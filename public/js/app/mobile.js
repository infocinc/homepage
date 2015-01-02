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


mobile.register_waypoints = function() {
	/*    $('#apropos-banner').waypoint(function(direction) {
	        if (direction === "down") {
	            $('#fixed-icons').children().removeClass('invisible');
	        } else {
	            $('#fixed-icons').children().addClass('invisible');
	        }
	    });
	*/
};

mobile.navbarClickHandler = function() {
	/*    $('#navbar-collapse').on('show.bs.collapse', function() {
	        $('#fixed-bar').css('opacity', '1');
	    });
	    $('#navbar-collapse').on('hide.bs.collapse', function() {
	        $('#fixed-bar').css('opacity', '');
	    });
	*/
}


mobile.init = function() {

	mobile.register_waypoints();
	mobile.bind_clickhandlers();
}
