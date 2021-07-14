const Seo = require('../../model/seoModel');
const AppError = require('../../utils/AppError');
const factory = require('../handlerFactory/factoryHandler');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const catchAsync = require('../../utils/catchAsync');

exports.createOne = catchAsync(async (req, res, next) => {
	await Seo.create(req.body);
	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
	});
});

exports.getOne = catchAsync(async (req, res, next) => {
	const seo = await Seo.findOne({ _id: req.params.id });
	if (!seo) {
		return next(new AppError(appErrors.NOT_FOUND, 404));
	}
	res.status(200).json({
		status: SUCCESS,
		data: {
			result: seo,
		},
	});
});

exports.getAll = factory.getAll(Seo);

exports.updateOne = catchAsync(async (req, res, next) => {
	const updatedseo = await Seo.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	res.status(200).json({
		status: SUCCESS,
		data: {
			result: updatedseo,
		},
	});
});

exports.deleteOne = catchAsync(async (req, res, next) => {
	await Seo.findByIdAndDelete(req.params.id);
	res.status(200).json({
		status: SUCCESS,
		data: null,
	});
});
