var app = require('../lib/app.js'),
    $ = require('jquery'),
    gmap = require('./gmap.js'),
    Background = require('../lib/canvas/background.js');

require('jquery-placeholder');
require('jquery-validate');

var velocities = [{
        'direction': -1,
        'speed': 20
    }, {
        'direction': -1,
        'speed': 50
    }],
    translateY = [0, 0];

var scene = {
    'container': '#form-wrapper',
    'background': 'rgb(0,0,0)',
    'sourceSet': [
        '/images/contact/stardust.png',
        '/images/contact/stardust.png'
    ],
    'refresh': function(index, c, ct, now, lastTime) {
        var o = {},
            v = velocities[index],
            w = v.speed * now / 1024,
            dy = v.direction * w % c.height;

        if (index == 0) {
            var color = 20 + Math.floor(Math.sin(Math.PI / 8 * now / 1000) * 30);
            $(c).css('background', 'rgb(' + 20 + ',' + (color) + ',' + color + ')');
        }
        return {
            'tx': index * 100,
            'ty': dy
        }
    }
};

(function configureValidator() {
    $.validator.addMethod("cRequired", $.validator.methods.required, required);
    $.validator.addMethod("cMaxLength", $.validator.methods.maxlength, maxlength);
    $.validator.addMethod("cTextAreaMaxLength", $.validator.methods.maxlength, textareamaxlength);
    $.validator.addClassRules("constrained", {
        cRequired: true,
        cMaxLength: 50
    });
    $.validator.addClassRules("msg-constrained", {
        cRequired: true,
        cTextAreaMaxLength: 2000
    });
})();

//////////////////////
// Client-side FORM Validation 
//////////////////////

$(document).ready(function() {
    app.init();
    var bg = new Background(scene);
    bg.play();

    var latitude = 45.714745, 
        longitude = -73.679500;

    gmap.init('map_canvas','Infocinc', gmap.flatGreenStyle, latitude, longitude);

    $('#formContact').validate({
        messages: {
            "email": validemail
        },
        success: function(label, element) {
            $(element).removeClass('has-error');
            $(element).addClass('has-success');
        },
        errorPlacement: function(error, element) {
            $(element).addClass('has-error');
            $(element).closest("div").append(error);
        },
        errorElement: "span"
    });

});
