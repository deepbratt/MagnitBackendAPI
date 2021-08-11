const Mailchimp = require('mailchimp-api-v3');
const mailchimp = new Mailchimp(process.env.MAILCHIMPAPI_KEY);

const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/AppError');
const { appErrors,appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;

exports.userSubscribe = catchAsync(async (req, res, next) => {
	mailchimp
		.post(`/lists/dd701bbc3c/members`, {
			email_address: req.body.email,
			status: 'subscribed',
		})
		.then(function (results) {
			res.status(200).json({
				status: SUCCESS,
				message: appSuccess.OPERATION_SUCCESSFULL,
			});
		})
		.catch(function (err) {
			return next(new AppError(err.message, 400));
		});
});