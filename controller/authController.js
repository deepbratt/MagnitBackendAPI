const User = require('../model/userModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const jwt = require('jsonwebtoken');
const config = require('config');
const JWT_SECRET = config.get('JWT_SECRET');
const jwtManagement = require('../utils/jwtManagement');

exports.signup = catchAsync(async (req, res) => {
	const newUser = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		phone: req.body.phone,
		password: req.body.password,
		passwordConfirm: req.body.passwordConfirm,
	};
	await User.create(newUser);
	res.status(200).json({
		status: 'success',
		message: 'Account Created Successfully',
	});
});

exports.login = catchAsync(async (req, res,next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		// checking email or password empty?
		return next(new AppError('Please provide email and password', 400));
	}

	const user = await User.findOne({ email: email }).select('+password');
	//user existance and password is correct
	if (!user || !(await user.correctPassword(password, user.password))) {
		return next(new AppError('Incorrect email or password', 401));
	}
	jwtManagement.createSendJwtToken(user, 200, req, res);
});

exports.authenticate = catchAsync(async(req, res, next) => {
	//getting token and check is it there
	let token;
	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		token = req.headers.authorization.split(' ')[1];
	} else if (req.cookies.jwt) {
		token = req.cookies.jwt;
	}
	if (!token) {
		return next(new AppError('You are not logged In Please login to get access', 401));
	}
	//verification token
	const decoded = jwt.verify(token, JWT_SECRET);
	//check if user sitll exists
	const currentUser = await User.findById(decoded.userdata.id);
	if (!currentUser) {
		return next(new AppError('User belonging to this token does no longer exist.', 404));
	}
	//check if user changed password after the token was issued
	// if (currentUser.changedPasswordAfter(decoded.iat)) {
	// 	return next(new AppError('You have recently changed password! Please login again.', 401));
	// }

	//Grant access to protected route
	req.user = currentUser;
	next();
});

exports.logout = catchAsync(async (req, res, next) => {
	res.cookie('jwt', 'loggedout', {
		expires: new Date(Date.now() + 10),
		httpOnly: true,
	});
	res.status(200).json({ status: 'success' });
});

exports.protectedRoute=async(req, res)=>{
	res.status(200).json({
		status: 'success',
		message:'this is protected route'
	})
}
