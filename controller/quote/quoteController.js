const Quote = require('../../model/quoteModel');
const AppError = require('../../utils/AppError');
const Email = require('../../utils/email');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const catchAsync = require('../../utils/catchAsync');

exports.addQuote = catchAsync(async (req, res) => {
	const newQuote = {
		name: req.body.name.trim(),
		email: req.body.email.trim(),
		companyName: req.body.companyName.trim(),
		phone: req.body.phone.trim(),
		projectDetails: req.body.projectDetails.trim(),
	};
	const quote = await Quote.create(newQuote);
	await new Email(quote.email, quote).quoteCreateRes();
	await new Email(process.env.ADMIN, quote).quoteCreateResAdmin();
	res.status(201).json({
		status: SUCCESS,
		message: `Quote Created ${appSuccess.OPERATION_SUCCESSFULL}`,
		data: {
			result: quote,
		},
	});
});

exports.getAllQuote = catchAsync(async (req, res) => {
	const quotes = await Quote.find();
	if (quotes.length === 0) {
		return next(new AppError(appErrors.NOT_FOUND, 404));
	}
	res.status(200).json({
		status: SUCCESS,
		results: quotes.length,
		data: {
			result: quotes,
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
			result: quote,
		},
	});
});
