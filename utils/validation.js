const { check, validationResult } = require('express-validator');
const { appErrors } = require('../constants/appConstants');

exports.validationFunction = async (req, res, next) => {
	const errors = validationResult(req);
	errors.type = 'expressValidationError';
	if (!errors.isEmpty()) {
		return next(errors);
	}
	next();
};

exports.signupValidationRules = [
	check('firstName', appErrors.FIRSTNAME_REQUIRED)
		.not()
		.isEmpty()
		.isAlpha()
		.withMessage(appErrors.INVALID_FIRSTNAME),
	check('lastName', appErrors.LASTNAME_REQUIRED)
		.not()
		.isEmpty()
		.isAlpha()
		.withMessage(appErrors.INVALID_LASTNAME),
	check('email',appErrors.INVALID_EMAIL).not().isEmpty().isEmail(),
	check('phone', appErrors.INVALID_PHONE_NUM).not().isEmpty().isMobilePhone(),
	check('password', appErrors.PASSWORD_LENGTH)
		.isLength({ min: 8 })
		.custom((value, { req }) => {
			if (value !== req.body.passwordConfirm) {
				// trow error if passwords do not match
				throw new Error(appErrors.PASSWORD_MISMATCH);
			} else {
				return value;
			}
		}),
];

exports.quoteValidationRules = [
	check('name', 'name is required')
		.not()
		.isEmpty()
		.isLength({ min: 3 })
		.withMessage('Name Should be greater than 3 characters.'),
	check('email', appErrors.INVALID_EMAIL).not().isEmpty().isEmail(),
	check('phone', appErrors.INVALID_PHONE_NUM).not().isEmpty().isMobilePhone(),
	check('companyName', 'Enter Company Name')
		.not()
		.isEmpty()
		.isLength({ min: 3 })
		.withMessage('company Name Should be greater than 3 characters.'),
	check('projectDetails', 'Enter Project Details')
		.not()
		.isEmpty()
		.isLength({ min: 30 })
		.withMessage('Project Details Should be Greater Than 30 characters.'),
];

exports.validEmail = [check('email', appErrors.INVALID_EMAIL).not().isEmpty().isEmail()];
