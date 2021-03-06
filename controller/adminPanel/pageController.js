const Page = require('../../model/pageModel');
const AppError = require('../../utils/AppError');
const { pageApi } = require('../../utils/scripts');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const factory = require('../handlerFactory/factoryHandler');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const catchAsync = require('../../utils/catchAsync');

exports.createOne = catchAsync(async (req, res, next) => {
	await Page.create(req.body);
	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
	});
});
exports.getAll = factory.getAll(Page);

exports.getOne = catchAsync(async (req, res, next) => {
	console.log(req.params.id);
	const page = await Page.findById(req.params.id);

	if (!page) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		data: {
			result: page,
		},
	});
});

exports.getOneBySlug = catchAsync(async (req, res, next) => {
	console.log(req.params.slug);
	let page = await Page.findOne({ 'metaData.canonical': req.params.slug });
	if (!page) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}
	console.log(page);
	const data = await pageApi(page);

	res.status(200).json({
		status: SUCCESS,
		data: {
			result: data,
		},
	});
});

exports.updateOne = catchAsync(async (req, res, next) => {
	const page = await Page.findByIdAndUpdate(req.params.id, req.body, {
		runValidator: true,
		new: true,
	});

	if (!page) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		data: {
			result: page,
		},
	});
});

exports.deleteOne = catchAsync(async (req, res, next) => {
	await Page.findByIdAndDelete(req.params.id);
	res.status(200).json({
		status: SUCCESS,
		data: null,
	});
});
