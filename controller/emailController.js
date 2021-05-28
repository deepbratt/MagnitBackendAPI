const Mailchimp = require('mailchimp-api-v3');
const config = require('config');
const MAILCHIMPAPI_KEY = config.get('MAILCHIMPAPI_KEY');
const mailchimp = new Mailchimp(MAILCHIMPAPI_KEY);
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const { appErrors } = require('../constants/appConstants');

exports.userSubscribe = catchAsync(async (req, res, next) => {
	mailchimp
		.put(`/lists/dd701bbc3c/members`, {
			email_address: req.body.email,
			status: 'subscribed',
		})
		.then(function (results) {
			res.status(200).json({
				status: 'success',
				message: appErrors.OPERATION_SUCCESSFULL,
			});
		})
		.catch(function (err) {
			return next(new AppError(err.message, 400));
		});
});
