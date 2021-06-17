const JoinTeam  = require('../model/joinTeamModel');
const AppError = require('../utils/AppError');
const { appErrors, appSuccess } = require('../constants/appConstants');
const { SUCCESS } = require('../constants/appConstants').resStatus;
const catchAsync = require('../utils/catchAsync');

exports.createOne = catchAsync(async (req, res, next) => {
	const newObj = {
		text: req.body.text.trim(),
		link: req.body.link.trim(),
		buttonLabel: req.body.buttonLabel.trim(),
	};
	await JoinTeam.create(newObj);
	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
	});
});

exports.getOne = catchAsync(async (req, res, next) => {
	const joinTeam = await JoinTeam.findOne({ _id: req.params.id });
	if (!joinTeam) {
		return next(new AppError(appErrors.NOT_FOUND, 404));
	}
	res.status(200).json({
		status: SUCCESS,
		data: {
			result:joinTeam,
		},
	});
});

exports.getAll = catchAsync(async (req, res, next) => {
	const teams = await JoinTeam.find();
	if (teams.length === 0) {
		return next(new AppError(appErrors.NOT_FOUND, 404));
	}
	res.status(200).json({
		status: SUCCESS,
        results:teams.length,
		data: {
			result:teams,
		},
	});
});

exports.updateOne = catchAsync(async (req, res, next) => {
	const updatedteam = await JoinTeam.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	res.status(200).json({
		status: SUCCESS,
		data: {
			result:updatedteam,
		},
	});
});

exports.deleteOne = catchAsync(async (req, res, next) => {
	await JoinTeam.findByIdAndDelete(req.params.id);
	res.status(200).json({
		status: SUCCESS,
		data: null,
	});
});
