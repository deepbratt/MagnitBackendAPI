const TrainingCertification = require('../model/trainingCertificationModel');
const AppError = require('../utils/AppError');
const { appErrors, appSuccess } = require('../constants/appConstants');
const { SUCCESS } = require('../constants/appConstants').resStatus;
const catchAsync = require('../utils/catchAsync');

exports.createTrainingCertification = catchAsync(async (req, res, next) => {
	const newobj = {
		jsonText: req.body.jsonText,
		title: req.body.title,
		description: req.body.description,
	};
	await TrainingCertification.create(newobj);
	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
	});
});

exports.getOne = catchAsync(async (req, res, next) => {
	const id = req.params.id;
	const trainingCertification = await TrainingCertification.findOne({ _id: id });
	if (!trainingCertification) {
		return next(new AppError(appErrors.NOT_FOUND, 404));
	}
	res.status(200).json({
		status: SUCCESS,
		data: {
			result:trainingCertification,
		},
	});
});

exports.getAll = catchAsync(async (req, res, next) => {
	const trainingCertifications = await TrainingCertification.find();
	if (trainingCertifications.length === 0) {
		return next(new AppError(appErrors.NOT_FOUND,404));
	}
	res.status(200).json({
		status: SUCCESS,
		results:trainingCertifications.length,
		data: {
			result:trainingCertifications,
		},
	});
});

exports.updateTrainingCertification = catchAsync(async (req, res, next) => {
	const updatedTrainingCertification = await TrainingCertification.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			new: true,
		}
	);
	res.status(200).json({
		status: SUCCESS,
		data: {
			result:updatedTrainingCertification,
		},
	});
});

exports.deleteTrainingCertification = catchAsync(async (req, res, next) => {
	await TrainingCertification.findByIdAndDelete(req.params.id);
	res.status(200).json({
		status: SUCCESS,
		data: null,
	});
});
