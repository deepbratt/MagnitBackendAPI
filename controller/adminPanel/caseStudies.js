const CaseStudies = require('../../model/caseStudiesModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/AppError');
const factory = require('../handlerFactory/factoryHandler');
const { uploadFile } = require('../../utils/s3');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const { appErrors, appSuccess } = require('../../constants/appConstants');

exports.createCaseStudy = catchAsync(async (req, res, next) => {
	const file = req.file;
	if (file) {
		const { Location } = await uploadFile(file);
		req.body.icon = Location;
	}
	const caseStudy = await CaseStudies.create(req.body);

	console.log(req.body);

	res.status(201).json({
		status: SUCCESS,
		data: {
			result: caseStudy,
		},
	});
});

exports.getAllCaseStudies = factory.getAll(CaseStudies);

exports.getCaseStudy = catchAsync(async (req, res, next) => {
	const caseStudy = await CaseStudies.findById(req.params.id);

	if (!caseStudy) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		data: {
			result: caseStudy,
		},
	});
});

exports.updateCaseStudy = catchAsync(async (req, res, next) => {
	if (req.file) {
		const { Location } = await uploadFile(req.file);
		req.body.icon = Location;
	}

	const caseStudy = await CaseStudies.findByIdAndUpdate(req.params.id, req.body, {
		runValidator: true,
		new: true,
	});

	if (!caseStudy) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		data: {
			result: caseStudy,
		},
	});
});

exports.deleteCaseStudy = catchAsync(async (req, res, next) => {
	const caseStudy = await CaseStudies.findByIdAndDelete(req.params.id);

	if (!caseStudy) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
		data: null,
	});
});
