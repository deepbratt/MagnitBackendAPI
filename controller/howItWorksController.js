const HowItWorks = require('../model/howItWorksModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const { uploadFile } = require('../utils/s3');

exports.createHowItWorks = catchAsync(async (req, res, next) => {
	const file = req.file;
	const { Location } = await uploadFile(file);
	const newObj = {
		title: req.body.title.trim(),
		text: req.body.text.trim(),
		image: Location,
	};
	const newHowItWork = await HowItWorks.create(newObj);
	console.log(newHowItWork);

	res.status(201).json({
		status: 'Success',
		data: {
			data: newHowItWork,
		},
	});
});
exports.getAllHowItWorks = catchAsync(async (req, res, next) => {
	const howItWorks = await HowItWorks.find();

	if (!howItWorks) {
		return next(new AppError(`No Document found.`), 404);
	}

	res.status(200).json({
		status: 'success',
		results: howItWorks.length,
		data: {
			data: howItWorks,
		},
	});
});

exports.getHowItWork = catchAsync(async (req, res, next) => {
	const howItWork = await HowItWorks.findById(req.params.id);

	if (!howItWork) {
		return next(new AppError(`No Document found with this ID`), 404);
	}

	res.status(200).json({
		status: 'success',
		data: {
			data: howItWork,
		},
	});
});

exports.updateHowItWork = catchAsync(async (req, res, next) => {
	if (req.file) {
		const { Location } = await uploadFile(req.file);
		req.body.image = Location;
	}

	const howItWork = await HowItWorks.findByIdAndUpdate(req.params.id, req.body, {
		runValidator: true,
		new: true,
	});

	if (!howItWork) {
		return next(new AppError(`Cannot Update Document, Something went wrong`), 404);
	}

	res.status(200).json({
		status: 'success',
		data: {
			data: howItWork,
		},
	});
});

exports.deleteHowItWork = catchAsync(async (req, res, next) => {
	const howItWork = await HowItWorks.findByIdAndDelete(req.params.id);

	if (!howItWork) {
		return next(new AppError(`No Document found with this ID`));
	}

	res.status(200).json({
		status: 'success',
		data: {
			data: null,
		},
	});
});
