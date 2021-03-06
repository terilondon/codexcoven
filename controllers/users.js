const db = require("../models");

const index = (req, res, next) => {
	db.User.find({}, (err, users) => {
		res.render("users/index", {
			users,
			user: req.user,
		});
		console.log(user);
	});
};

const isLoggedIn = (req, res, next) => {
	if (req.isAuthenticated()) return next();
	res.redirect("/auth/google");
};

module.exports = {
	index,
	isLoggedIn,
};
