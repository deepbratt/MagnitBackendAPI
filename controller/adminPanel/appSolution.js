const AppSolution = require('../../model/appSolutionsModel');
const AppError = require('../../utils/AppError');
const factory = require('../handlerFactory/factoryHandler');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const catchAsync = require('../../utils/catchAsync');
const { base64FileUpload } = require('../../utils/s3');

exports.createOne = catchAsync(async (req, res, next) => {
	if (req.body.image) {
		if (req.body.image.split(':')[0] !== 'https') {
			let { Location } = await base64FileUpload(req.body.image, next);
			req.body.image = Location;
		}
	}
	if (req.body.dataArray) {
		for (var i = 0; i < req.body.dataArray.length; i++) {
			let { Location } = await base64FileUpload(req.body.dataArray[i].icon, next);
			req.body.dataArray[i].icon = Location;
		}
	}
	await AppSolution.create(req.body);
	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
	});
});
exports.getAll = factory.getAll(AppSolution);

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
	if (req.body.image) {
		if (req.body.image.split(':')[0] !== 'https') {
			let { Location } = await base64FileUpload(req.body.image, next);
			req.body.image = Location;
		}
	}
	if (req.body.dataArray) {
		for (var i = 0; i < req.body.dataArray.length; i++) {
			if (req.body.dataArray[i].icon.split(':')[0] !== 'https') {
				let { Location } = await base64FileUpload(req.body.dataArray[i].icon, next);
				req.body.dataArray[i].icon = Location;
			}
		}
	}

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
