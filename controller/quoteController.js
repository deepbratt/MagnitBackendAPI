const Quote = require('../model/quoteModel');
const AppError = require('../utils/AppError');
const Email=require('../utils/email');
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
    new Email({name: quote.name, email: quote.email}).sendEmailQuoteCreate()
	res.status(201).json({
		status: 'success',
		message: 'Quote created successfully',
		data: {
			quote,
		},
	});
});


exports.getAllQuote = catchAsync(async (req, res) => {
	const quotes = await Quote.find();
	res.status(201).json({
		status: 'success',
		data: {
			quotes,
		},
	});
});

exports.getQuote = catchAsync(async (req, res) => {
    const quoteId = req.params.id;
	const quote = await Quote.findById(quoteId);
	res.status(201).json({
		status: 'success',
		data: {
			quote,
		},
	});
});
