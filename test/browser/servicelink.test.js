// must run in (headless) browser 
var should = require('chai').should(),
	$ = require('jquery'),
	registerLinks = require('../../public/js/app/servicelink.js');
	utils = require('../../public/js/lib/app-utils.js');

describe('ServiceLinks', function() {
	
	describe('register', function() {
		before(function() {
			$('body').append("<div class='service-link'></div>");
			$('.service-link').append("<img src='images/design.png'>");
			registerLinks();
		});
		it("should add -hover to img filename on mouseenter", function(done) {
			$('.service-link').on("mouseenter", function() {
				var hoverImg = $(this).find('img').attr('src');
				hoverImg.should.equal("images/design-hover.png");
				done();
			});
			$('.service-link').trigger('mouseenter');
		});
		it("should remove -hover to img filename on mouseleave", function(done) {
			$('.service-link').on("mouseleave", function() {
				var hoverImg = $(this).find('img').attr('src');
				hoverImg.should.equal("images/design.png");
				done();
			});
			$('.service-link').trigger('mouseleave');
		});
		after(function() {
			$('.service-link').remove();
		});
	});
});
