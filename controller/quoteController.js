const Quote = require('../model/quoteModel');
const AppError = require('../utils/AppError');
const { appErrors } = require('../constants/appConstants');
const { SUCCESS } = require('../constants/appConstants').resStatus;
const catchAsync = require('../utils/catchAsync');

exports.addQuote = catchAsync(async (req, res) => {
	const newQuote = {
		name: req.body.name.trim(),
		email: req.body.email.trim(),
		companyName: req.body.companyName.trim(),
		phone: req.body.phone.trim(),
		projectDetails: req.body.projectDetails.trim(),
	};
	const quote = await Quote.create(newQuote);
	res.status(201).json({
		status: SUCCESS,
		message: `Quote Created ${appErrors.OPERATION_SUCCESSFULL}`,
		data: {
			quote,
		},
	});
});

exports.getAllQuote = catchAsync(async (req, res) => {
	const quotes = await Quote.find();
	res.status(200).json({
		status: SUCCESS,
		data: {
			quotes,
		},
	});
});

exports.getQuote = catchAsync(async (req, res) => {
	const quoteId = req.params.id;
	const quote = await Quote.findById(quoteId);
	if (!quote) {
		return next(new AppError(appErrors.NOT_FOUND, 404));
	}
	res.status(200).json({
		status: SUCCESS,
		data: {
			quote,
		},
	});
});
