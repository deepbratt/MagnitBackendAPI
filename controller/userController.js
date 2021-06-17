const User = require('../model/userModel');
const AppError = require('../utils/AppError');
const { appErrors, appSuccess } = require('../constants/appConstants');
const { SUCCESS } = require('../constants/appConstants').resStatus;
const catchAsync = require('../utils/catchAsync');

exports.addUser = catchAsync(async (req, res) => {
	const newUser = {
		firstName: req.body.firstName.trim(),
		lastName: req.body.lastName.trim(),
		email: req.body.email.trim(),
		password: req.body.password,
		passwordConfirm: req.body.passwordConfirm,
	};
	await User.create(newUser);
	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
	});
});
exports.getAllUsers = catchAsync(async (req, res, next) => {
	const users = await User.find();
	if (users.length === 0) {
		return next(new AppError(appErrors.NOT_FOUND, 404));
	}
	res.status(200).json({
		status: SUCCESS,
        results:users.length,
		data: {
			result:users,
		},
	});
});

exports.getOne = catchAsync(async (req, res, next) => {
	const user = await User.findOne({ _id: req.params.id });
	if (!user) {
		return next(new AppError(appErrors.NOT_FOUND, 404));
	}
	res.status(200).json({
		status: SUCCESS,
		data: {
			result:user,
		},
	});
});

exports.deleteUser = catchAsync(async (req, res) => {
	await User.findByIdAndDelete(req.params.id);
	res.status(200).json({
		status: SUCCESS,
		data: null,
	});
});
