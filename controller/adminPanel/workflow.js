const Workflow = require('../../model/workflowModel');
const factory = require('../handlerFactory/factoryHandler');
const catchAsync = require('../../utils/catchAsync');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const AppError = require('../../utils/AppError');
const { uploadFile } = require('../../utils/s3');

exports.createWorkflow = catchAsync(async (req, res, next) => {
	const file = req.file;
	if (file) {
		const { Location } = await uploadFile(file);
		req.body.image = Location;
	}

	workflow = await Workflow.create(req.body);

	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
		data: {
			result: workflow,
		},
	});
});

exports.getAllWorkflows = factory.getAll(Workflow);

exports.getWorkflow = catchAsync(async (req, res, next) => {
	const workflow = await Workflow.findById(req.params.id);

	if (!workflow) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		data: {
			result: workflow,
		},
	});
});

exports.updateWorkflow = catchAsync(async (req, res, next) => {
	if (req.file) {
		const { Location } = await uploadFile(req.file);
		req.body.image = Location;
	}

	const workflow = await Workflow.findByIdAndUpdate(req.params.id, req.body, {
		runValidator: true,
		new: true,
	});

	if (!workflow) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		data: {
			result: workflow,
		},
	});
});

exports.deleteWorkflow = catchAsync(async (req, res, next) => {
	const workflow = await Workflow.findByIdAndDelete(req.params.id);

	if (!workflow) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		data: null,
	});
});
