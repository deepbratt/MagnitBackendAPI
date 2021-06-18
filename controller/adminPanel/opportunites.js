const Opportunite = require('../../model/opportunitiesModel');
const AppError = require('../../utils/AppError');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const catchAsync = require('../../utils/catchAsync');

exports.createOne = catchAsync(async (req, res, next) => {
	const newObj = {
		title: req.body.title.trim(),
		location: req.body.location.trim(),
        link: req.body.link.trim(),
		buttonLabel: req.body.buttonLabel.trim(),
	};
	await Opportunite.create(newObj);
	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
	});
});

exports.getOne = catchAsync(async (req, res, next) => {
	const opportunite = await Opportunite.findOne({ _id: req.params.id });
	if (!opportunite) {
		return next(new AppError(appErrors.NOT_FOUND, 404));
	}
	res.status(200).json({
		status: SUCCESS,
		data: {
			result:opportunite,
		},
	});
});

exports.getAll = catchAsync(async (req, res, next) => {
	const opportunites = await Opportunite.find();
	if (opportunites.length === 0) {
		return next(new AppError(appErrors.NOT_FOUND, 404));
	}
	res.status(200).json({
		status: SUCCESS,
        results:opportunites.length,
		data: {
			result:opportunites,
		},
	});
});

exports.updateOne = catchAsync(async (req, res, next) => {
	const updatedOpportunite = await Opportunite.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	res.status(200).json({
		status: SUCCESS,
		data: {
			result:updatedOpportunite,
		},
	});
});

exports.deleteOne = catchAsync(async (req, res, next) => {
	await Opportunite.findByIdAndDelete(req.params.id);
	res.status(200).json({
		status: SUCCESS,
		data: null,
	});
});
