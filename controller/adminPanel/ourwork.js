const Ourwork = require('../../model/ourWorkModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/AppError');
const { uploadFile } = require('../../utils/s3');
const { appSuccess, appErrors } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;

exports.createOurWork = catchAsync(async (req, res, next) => {
	const file = req.file;
	if (file) {
		const { Location } = await uploadFile(file);
		req.body.image = Location;
	}

	const newOurWork = await Ourwork.create(req.body);

	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
		data: {
			result: newOurWork,
		},
	});
});

exports.getAllOurWorks = catchAsync(async (req, res, next) => {
	const ourwork = await Ourwork.find();

	if (!ourwork) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		results: ourwork.length,
		data: {
			result: ourwork,
		},
	});
});

exports.getOurWork = catchAsync(async (req, res, next) => {
	const ourwork = await Ourwork.findById(req.params.id);

	if (!ourwork) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		data: {
			result: ourwork,
		},
	});
});

exports.updateOurWork = catchAsync(async (req, res, next) => {
	if (req.file) {
		const { Location } = await uploadFile(req.file);
		req.body.image = Location;
	}

	const ourwork = await Ourwork.findByIdAndUpdate(req.params.id, req.body, {
		runValidator: true,
		new: true,
	});

	if (!ourwork) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		data: {
			result: ourwork,
		},
	});
});

exports.deleteOurWork = catchAsync(async (req, res, next) => {
	const ourwork = await Ourwork.findByIdAndDelete(req.params.id);

	if (!ourwork) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
		data: null,
	});
});
