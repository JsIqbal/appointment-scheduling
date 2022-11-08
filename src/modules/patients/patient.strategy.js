const path = require("path");
const passport = require("passport");
const { Strategy } = require("passport-jwt");
const Patient = require('../patients/patient.model');

module.exports = () => {
	function cookieExtractor(req) {
		let token = null;
		if (req && req.signedCookies) {
			token = req.signedCookies["patient_token"];
		}
		return token;
	}

	passport.use(
		"user-jwt",
		new Strategy({ secretOrKey: 'patient_secret', jwtFromRequest: cookieExtractor }, function (payload, done) {
			Admin.findOne({
				where: {
					id: payload.id,
				},
			}).then((user) => {
				if (user) {
					return done(null, user);
				}

				return done(null, false);
			});
		})
	);

    console.log("patient Strategy Initialized!");
};
