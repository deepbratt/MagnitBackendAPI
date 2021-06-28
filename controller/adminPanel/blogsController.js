const Blogs = require('../../model/blogsModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/AppError');
const factory = require('../handlerFactory/factoryHandler');
const { uploadFile } = require('../../utils/s3');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const APIFeatures = require('../../utils/apiFeatures');

exports.createBlog = catchAsync(async (req, res, next) => {
	const file = req.file;
	if (file) {
		const { Location } = await uploadFile(file);
		req.body.image = Location;
	}

	const result = await Blogs.create(req.body);

	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
		data: {
			result,
		},
	});
});

exports.getAllBlogs = factory.getAll(Blogs);

exports.getBlog = catchAsync(async (req, res, next) => {
	const result = await Blogs.findById(req.params.id);

	if (!result) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}
	console.count();
	res.status(200).json({
		status: SUCCESS,
		data: {
			result,
		},
	});
});

exports.updateBlog = catchAsync(async (req, res, next) => {
	if (req.file) {
		const { Location } = await uploadFile(req.file);
		req.body.image = Location;
	}

	const result = await Blogs.findByIdAndUpdate(req.params.id, req.body, {
		runValidator: true,
		new: true,
	});

	if (!result) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		data: {
			result,
		},
	});
});

exports.deleteBlog = catchAsync(async (req, res, next) => {
	const result = await Blogs.findByIdAndDelete(req.params.id);

	if (!result) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
		data: null,
	});
});
