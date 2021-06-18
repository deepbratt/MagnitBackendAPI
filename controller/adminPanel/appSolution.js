const AppSolution = require('../../model/appSolutionsModel');
const AppError = require('../../utils/AppError');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const catchAsync = require('../../utils/catchAsync');
const { uploadFile } = require('../../utils/s3');

exports.createOne = catchAsync(async (req, res, next) => {
	await AppSolution.create(req.body);
	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
	});
});
exports.getAll = catchAsync(async (req, res, next) => {
	const appSolutions = await AppSolution.find();

	if (!appSolutions) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		results: appSolutions.length,
		data: {
			result: appSolutions,
		},
	});
});

exports.getOne = catchAsync(async (req, res, next) => {
	const appsolution = await AppSolution.findById(req.params.id);

	if (!appsolution) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		data: {
			result: appsolution,
		},
	});
});

exports.updateOne = catchAsync(async (req, res, next) => {
	const appsolution = await AppSolution.findByIdAndUpdate(req.params.id, req.body, {
		runValidator: true,
		new: true,
	});

	if (!appsolution) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		data: {
			result: appsolution,
		},
	});
});

exports.deleteOne = catchAsync(async (req, res, next) => {
	const appsolution = await AppSolution.findByIdAndDelete(req.params.id);

	res.status(200).json({
		status: SUCCESS,
		data: null,
	});
});
