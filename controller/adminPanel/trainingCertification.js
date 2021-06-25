const TrainingCertification = require('../../model/trainingCertificationModel');
const AppError = require('../../utils/AppError');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const catchAsync = require('../../utils/catchAsync');
const { uploadFile } = require('../../utils/s3');

exports.createTrainingCertification = catchAsync(async (req, res, next) => {
	const file = req.file;
	if (file) {
		const { Location } = await uploadFile(file);
		req.body.jsonFile = Location;
	}
	await TrainingCertification.create(req.body);
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
			result: trainingCertification,
		},
	});
});

exports.getAll = catchAsync(async (req, res, next) => {
	const trainingCertifications = await TrainingCertification.find();
	if (trainingCertifications.length === 0) {
		return next(new AppError(appErrors.NOT_FOUND, 404));
	}
	res.status(200).json({
		status: SUCCESS,
		results: trainingCertifications.length,
		data: {
			result: trainingCertifications,
		},
	});
});

exports.updateTrainingCertification = catchAsync(async (req, res, next) => {
	if (req.file) {
		const { Location } = await uploadFile(req.file);
		req.body.jsonFile = Location;
	}
	const updatedTrainingCertification = await TrainingCertification.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			runValidators: true,
			new: true,
		}
	);
	res.status(200).json({
		status: SUCCESS,
		data: {
			result: updatedTrainingCertification,
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
