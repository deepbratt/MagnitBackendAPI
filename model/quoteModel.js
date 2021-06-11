const mongoose = require('mongoose');
const validator = require('validator');

const { appErrors } = require('../constants/appConstants');

const quoteSchema = new mongoose.Schema({
	name: {
		type: String,
		minlength: 3,
		maxlength: 30,
		required: [true, 'Please Enter Your Name'],
	},
	email: {
		type: String,
		required: [true, 'Please Enter your Email'],
		lowercase: true,
		validate: [validator.isEmail, appErrors.INVALID_EMAIL],
	},
	companyName: {
		type: String,
		required: [true, 'Please Enter Company Name'],
	},
	phone: {
		type: String,
        required: [true, 'Please Enter Phone Number'],
		validate: [validator.isMobilePhone, appErrors.INVALID_PHONE_NUM],
	},
	projectDetails:{
        type: String,
        required: [true, 'Please Enter Project Project Details']
    }
});

const Quote = mongoose.model('Quote', quoteSchema);
module.exports = Quote;
