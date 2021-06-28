const Review = require('../../model/reviewModel');
const AppError = require('../../utils/AppError');
const factory = require('../handlerFactory/factoryHandler');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const catchAsync = require('../../utils/catchAsync');
const { uploadFile } = require('../../utils/s3');
const { servicesAll } = require('../../utils/scripts');

exports.addReview = catchAsync(async (req, res, next) => {
	const file = req.file;
	if (file) {
		const { Location } = await uploadFile(file);
		req.body.image = Location;
	}
	if (req.body.projectType) {
		if (!(await servicesAll(req.body.projectType))) {
			return next(new AppError('No Type Found', 400));
		}
	}

	await Review.create(req.body);
	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
	});
});

exports.getReview = catchAsync(async (req, res, next) => {
	const reviewId = req.params.id;
	const review = await Review.findOne({ _id: reviewId });
	if (!review) {
		return next(new AppError('Not Found', 404));
	}
	res.status(200).json({
		status: SUCCESS,
		data: {
			result: review,
		},
	});
});

exports.getAllReviews = factory.getAll(Review);

exports.updateReview = catchAsync(async (req, res, next) => {
	if (req.file) {
		const { Location } = await uploadFile(req.file);
		req.body.image = Location;
	}
	if (req.body.projectType) {
		if (!(await servicesAll(req.body.projectType))) {
			return next(new AppError('No Type Found', 400));
		}
	}
	const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	res.status(200).json({
		status: SUCCESS,
		data: {
			result: updatedReview,
		},
	});
});

exports.deleteReview = catchAsync(async (req, res, next) => {
	await Review.findByIdAndDelete(req.params.id);
	res.status(200).json({
		status: SUCCESS,
		data: null,
	});
});
