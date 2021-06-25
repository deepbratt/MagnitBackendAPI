const Objective = require('../../model/ourObjectiveModel');
const AppError = require('../../utils/AppError');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const catchAsync = require('../../utils/catchAsync');
const { uploadFile } = require('../../utils/s3');

exports.createObjective = catchAsync(async (req, res, next) => {
	const file = req.file;
	if (file) {
		const { Location } = await uploadFile(file);
		req.body.icon = Location;
	}

	await Objective.create(req.body);
	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
	});
});

exports.getObjective = catchAsync(async (req, res, next) => {
	const objective = await Objective.findOne({ _id: req.params.id });
	if (!objective) {
		return next(new AppError('Not Found', 404));
	}
	res.status(200).json({
		status: SUCCESS,
		data: {
			result: objective,
		},
	});
});

exports.getAllObjectives = catchAsync(async (req, res, next) => {
	const objectives = await Objective.find();
	if (objectives.length === 0) {
		return next(new AppError('Not Found', 404));
	}
	res.status(200).json({
		status: SUCCESS,
		results: objectives.length,
		data: {
			result: objectives,
		},
	});
});

exports.updateObjective = catchAsync(async (req, res, next) => {
	if (req.file) {
		const { Location } = await uploadFile(req.file);
		req.body.icon = Location;
	}
	const updatedObjective = await Objective.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.status(200).json({
		status: SUCCESS,
		data: {
			result: updatedObjective,
		},
	});
});

exports.deleteObjective = catchAsync(async (req, res, next) => {
	await Objective.findByIdAndDelete(req.params.id);
	res.status(200).json({
		status: SUCCESS,
		data: null,
	});
});
