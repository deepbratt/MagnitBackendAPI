const Facts = require('../../model/factsAboutUsModel');
const AppError = require('../../utils/AppError');
const factory = require('../handlerFactory/factoryHandler');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const catchAsync = require('../../utils/catchAsync');
const { uploadFile } = require('../../utils/s3');

exports.createFactsAboutUs = catchAsync(async (req, res, next) => {
	const file = req.file;
	if (file) {
		const { Location } = await uploadFile(file);
		req.body.icon = Location;
	}

	const factsAboutUs = await Facts.create(req.body);
	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
		data: {
			result: factsAboutUs,
		},
	});
});

exports.getFactAboutUs = catchAsync(async (req, res, next) => {
	const id = req.params.id;
	const factAboutUs = await Facts.findOne({ _id: id });

	if (!factAboutUs) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}
	res.status(200).json({
		status: SUCCESS,
		data: {
			result: factAboutUs,
		},
	});
});

exports.getAllFactsAboutUs = factory.getAll(Facts);

exports.updateFactAboutUs = catchAsync(async (req, res, next) => {
	if (req.file) {
		const { Location } = await uploadFile(req.file);
		req.body.icon = Location;
	}
	const factAboutUs = await Facts.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});

	if (!factAboutUs) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		data: {
			result: factAboutUs,
		},
	});
});

exports.deleteFactAboutUs = catchAsync(async (req, res, next) => {
	await Facts.findByIdAndDelete(req.params.id);
	res.status(200).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
		data: null,
	});
});
