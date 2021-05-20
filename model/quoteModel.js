const mongoose = require('mongoose');
const validator = require('validator');

const quoteSchema = new mongoose.Schema({
	name: {
		type: String,
		minlength: 3,
		maxlength: 30,
		required: [true, 'Please Enter Your Name'],
		validate: [validator.isAlpha, 'Name must only contain characters between A-Z'],
	},
	email: {
		type: String,
		required: [true, 'Please Enter your Email'],
		unique: true,
		lowercase: true,
		validate: [validator.isEmail, 'Please Enter Valid Email'],
	},
	companyName: {
		type: String,
		required: [true, 'Please Enter Company Name'],
        unique: true,
	},
	phone: {
		type: String,
        required: [true, 'Please Enter Phone Number'],
		validate: [validator.isMobilePhone, 'Enter valid Phone Number'],
	},
	projectDetails:{
        type: String,
        required: [true, 'Please Enter Project Project Details']
    }
});

const Quote = mongoose.model('Quote', quoteSchema);
module.exports = Quote;
