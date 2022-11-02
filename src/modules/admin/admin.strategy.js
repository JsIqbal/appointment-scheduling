const path = require("path");
const passport = require("passport");
const { Strategy } = require("passport-jwt");
const Admin = require(path.join(process.cwd(), "src/modules/admin/admin.model"));

module.exports = () => {
	function cookieExtractor(req) {
		let token = null;
		if (req && req.signedCookies) {
			token = req.signedCookies["access_token"];
		}
		return token;
	}

	passport.use(
		"user-jwt",
		new Strategy({ secretOrKey: 'token_secret', jwtFromRequest: cookieExtractor }, function (payload, done) {
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

    console.log("Strategy Initialized!");
};
