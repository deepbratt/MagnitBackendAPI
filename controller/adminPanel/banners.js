const Banner = require('../../model/bannerModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/AppError');
const factory = require('../handlerFactory/factoryHandler');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { uploadFile } = require('../../utils/s3');

exports.createBanner = catchAsync(async (req, res, next) => {
	const file = req.file;
	if (file) {
		const { Location } = await uploadFile(file);
		req.body.image = Location;
	}
	const newBanner = await Banner.create(req.body);
	console.log(req.body);

	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
		data: {
			result: newBanner,
		},
	});
});

exports.getAllBanners = factory.getAll(Banner);

exports.getBanner = catchAsync(async (req, res, next) => {
	const banner = await Banner.findById(req.params.id);

	if (!banner) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		data: {
			result: banner,
		},
	});
});

exports.updateBanner = catchAsync(async (req, res, next) => {
	if (req.file) {
		const { Location } = await uploadFile(req.file);
		req.body.image = Location;
	}

	const banner = await Banner.findByIdAndUpdate(req.params.id, req.body, {
		runValidator: true,
		new: true,
	});

	if (!banner) {
		return next(new AppError(appErrors.NOT_FOUND), 404);
	}

	res.status(200).json({
		status: SUCCESS,
		data: {
			result: banner,
		},
	});
});

exports.deleteBanner = catchAsync(async (req, res, next) => {
	const banner = await Banner.findByIdAndDelete(req.params.id);

	if (!banner) {
		return next(new AppError(appErrors.NOT_FOUND));
	}

	res.status(200).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
		data: null,
	});
});
