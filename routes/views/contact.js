var dsy = require('../../lib/dsy'),
	Enquiry = dsy.list('Enquiry');


exports = module.exports = function(req,res) {
	var view = new dsy.View(req,res),
		locals = res.locals;

	locals.section = 'contact';
	locals.lang = req.params.lng || 'fr';
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;

	view.on('post', {action: 'contact'}, function(next) {
		var application = new Enquiry.model(),
			updater = application.getUpdateHandler(req);

		updater.options.errorMessage = 'Oops!';

		updater.process(req.body, {
			flashErrors: true
		}, function(err) {
			if (err) {
				locals.validationErrors = err.errors;
				console.log(err);
			} else {
				locals.enquirySubmitted = true;
				var email = new dsy.Email('enquiry-notification');
				locals.enquiry = application;
				email.send({
					enquiry: application, 
					fromName: 'Infocinc',
					fromEmail: 'info@infocinc.com',
					to: 'ndutil79@gmail.com'
				}, function(err,info) {
					if (err)
						console.log(err);
					
				});
			}
			next();
		});
	});
	view.render('contact');
}
