const Review = require('../model/reviewModel');
const AppError = require('../utils/AppError');
const { appErrors, appSuccess } = require('../constants/appConstants');
const { SUCCESS } = require('../constants/appConstants').resStatus;
const catchAsync = require('../utils/catchAsync');
const { uploadFile } = require('../utils/s3');

exports.addReview = catchAsync(async (req, res, next) => {
	const file = req.file;
	const { Location } = await uploadFile(file);
	const newReview = {
		clientName: req.body.clientName.trim(),
		projectName: req.body.projectName.trim(),
		projectType: req.body.projectType.trim(),
		rating: req.body.rating,
		review: req.body.review.trim(),
		image: Location,
	};
	await Review.create(newReview);
	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
	});
});

exports.getReview = catchAsync(async (req, res, next) => {
	const reviewId = req.params.id;
	const review = await Review.findOne({ _id: reviewId });
	if (!review) {
		return next(new AppError('Not Found'));
	}
	res.status(200).json({
		status: SUCCESS,
		data: {
			review,
		},
	});
});

exports.getAllReviews = catchAsync(async (req, res, next) => {
	const reviews = await Review.find();
	if (reviews.length === 0) {
		return next(new AppError('Not Found'));
	}
	res.status(200).json({
		status: SUCCESS,
		data: {
			reviews,
		},
	});
});

exports.updateReview = catchAsync(async (req, res, next) => {
	if (req.file) {
		const { Location } = await uploadFile(req.file);
		req.body.image = Location;
	}
	const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	res.status(200).json({
		status: SUCCESS,
		data: {
			updatedReview,
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
