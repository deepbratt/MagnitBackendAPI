const JobBenifit = require('../../model/jobBenifitsModel');
const AppError = require('../../utils/AppError');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const factory = require('../handlerFactory/factoryHandler');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const catchAsync = require('../../utils/catchAsync');
const { uploadFile } = require('../../utils/s3');

exports.createOne = catchAsync(async (req, res, next) => {
	const file = req.file;
	if (file) {
		const { Location } = await uploadFile(file);
		req.body.icon = Location;
	}

	await JobBenifit.create(req.body);
	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
	});
});

exports.getOne = catchAsync(async (req, res, next) => {
	const jobBenifit = await JobBenifit.findOne({ _id: req.params.id });
	if (!jobBenifit) {
		return next(new AppError(appErrors.NOT_FOUND, 404));
	}
	res.status(200).json({
		status: SUCCESS,
		data: {
			result: jobBenifit,
		},
	});
});

exports.getAll = factory.getAll(JobBenifit);

exports.updateOne = catchAsync(async (req, res, next) => {
	if (req.file) {
		const { Location } = await uploadFile(req.file);
		req.body.icon = Location;
	}
	const updatedjobBenifit = await JobBenifit.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	res.status(200).json({
		status: SUCCESS,
		data: {
			result: updatedjobBenifit,
		},
	});
});

exports.deleteOne = catchAsync(async (req, res, next) => {
	await JobBenifit.findByIdAndDelete(req.params.id);
	res.status(200).json({
		status: SUCCESS,
		data: null,
	});
});
