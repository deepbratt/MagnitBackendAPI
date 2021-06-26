const Solution = require('../../model/ourSolutionsModel');
const AppError = require('../../utils/AppError');
const factory = require('../handlerFactory/factoryHandler');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const catchAsync = require('../../utils/catchAsync');
const { uploadFile } = require('../../utils/s3');

exports.createOne = catchAsync(async (req, res, next) => {
	const file = req.file;
	if (file) {
		const { Location } = await uploadFile(file);
		req.body.image = Location;
	}

	await Solution.create(req.body);
	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
	});
});

exports.getOne = catchAsync(async (req, res, next) => {
	const solution = await Solution.findOne({ _id: req.params.id });
	if (!solution) {
		return next(new AppError('Not Found', 404));
	}
	res.status(200).json({
		status: SUCCESS,
		data: {
			result: solution,
		},
	});
});

exports.getAll = factory.getAll(Solution);

exports.updateOne = catchAsync(async (req, res, next) => {
	if (req.file) {
		const { Location } = await uploadFile(req.file);
		req.body.image = Location;
	}
	const updated = await Solution.findByIdAndUpdate(req.params.id, req.body, {
		runValidators: true,
		new: true,
	});
	res.status(200).json({
		status: SUCCESS,
		data: {
			result: updated,
		},
	});
});

exports.deleteOne = catchAsync(async (req, res, next) => {
	await Solution.findByIdAndDelete(req.params.id);
	res.status(200).json({
		status: SUCCESS,
		data: null,
	});
});
