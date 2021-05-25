const { check, validationResult } = require('express-validator');

exports.validationFunction = async (req, res, next) => {
	const errors = validationResult(req);
	errors.type = 'expressValidationError';
	if (!errors.isEmpty()) {
		return next(errors);
	}
	next();
};

exports.signupValidationRules = [
	check('firstName', 'firstName is required')
		.not()
		.isEmpty()
		.isAlpha()
		.withMessage('FirstName must only contain characters between A-Z'),
	check('lastName', 'lastName is required')
		.not()
		.isEmpty()
		.isAlpha()
		.withMessage('LastName must only contain characters between A-Z'),
	check('email', 'Enter valid email address').not().isEmpty().isEmail(),
	check('phone', 'Enter valid phone number').not().isEmpty().isMobilePhone(),
	check('password', 'Enter Password with 8 or more characters')
		.isLength({ min: 8 })
		.custom((value, { req }) => {
			if (value !== req.body.passwordConfirm) {
				// trow error if passwords do not match
				throw new Error("Passwords don't match");
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
	check('email', 'Enter valid email address').not().isEmpty().isEmail(),
	check('phone', 'Enter valid phone number').not().isEmpty().isMobilePhone(),
	check('companyName', 'Enter Company Name')
		.not()
		.isEmpty()
		.isLength({ min: 3 })
		.withMessage('company Name Should be greater than 3 characters.'),
	check('projectDetails', 'Enter Project Details')
		.not()
		.isEmpty()
		.isLength({ min: 30 })
		.withMessage('Project Details Should be Greater Than 30 characters.')
];
