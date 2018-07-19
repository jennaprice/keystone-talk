var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
    var locals = res.locals;
    locals.section = 'about';

	locals.data = {
		teamMembers: [],
	};
    
    view.on('init', function (next) {

		var q = keystone.list('TeamMember').model.find();

		q.exec(function (err, result) {
			locals.data.teamMembers = result;
			next(err);
		});

    });
    
    // Render the view
	view.render('about');
};