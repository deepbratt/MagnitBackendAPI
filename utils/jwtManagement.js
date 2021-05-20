const jwt = require('jsonwebtoken');
const config = require('config');
const JWT_SECRET = config.get('JWT_SECRET');
const JWT_EXPIRES_IN = config.get('JWT_EXPIRES_IN');
const COOKIE_EXPIRES_IN = config.get('COOKIE_EXPIRES_IN');

const signToken = (user) => {
	const payload = {
		userdata: {
			id: user._id,
		},
	};
	return jwt.sign(payload, JWT_SECRET, {
		expiresIn: JWT_EXPIRES_IN * 24 * 60 * 60 * 1000,
	});
};
exports.createSendJwtToken = (user, statuscode, req, res) => {
	const token = signToken(user);
	const cookieOptions = {
		expires: new Date(Date.now() + COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
		httpOnly: true,
		//secure: req.secure || req.headers('x-forwarded-proto') === 'https',
	};
	res.cookie('jwt', token, cookieOptions);
	user.password = undefined;
	res.status(statuscode).json({
		status: 'success',
		token,
		data: {
			user,
		},
	});
};
