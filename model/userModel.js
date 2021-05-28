const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		minlength: 3,
		maxlength: 15,
		required: [true, 'Please Enter your First Name'],
		validate: [validator.isAlpha, 'FirstName must only contain characters between A-Z'],
	},
	lastName: {
		type: String,
		minlength: 3,
		maxlength: 15,
		required: [true, 'Please Enter your Last Name'],
		validate: [validator.isAlpha, 'LastName must only contain characters between A-Z'],
	},
	email: {
		type: String,
		required: [true, 'Please Enter your Email'],
		unique: true,
		lowercase: true,
		validate: [validator.isEmail, 'Please Enter Valid Email'],
	},
	phone: {
		type: String,
		validate: [validator.isMobilePhone, 'Enter valid Phone Number'],
	},
	password: {
		type: String,
		required: [true, 'Please Provide a Password'],
		minlength: 8,
		select: false,
	},
	passwordConfirm: {
		type: String,
		required: [true, 'Please Confirm Your Password'],
		//only works on create or save
		validate: {
			validator: function (el) {
				return el === this.password;
			},
			message: 'Password and ConfirmPassword are not equal.',
		},
	},
	dateOfjoin: {
		type: Date,
		required: true,
		default: Date.now(),
	},
	dateOfUpdate: Date,
	lastLogin: Date,
});

//pre save middleware (runs before data saved to db)
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next();
	this.password = await bcrypt.hash(this.password, 12);
	this.passwordConfirm = undefined;
	next();
});

//SCHEMA METHODS
userSchema.methods.correctPassword = async function (candidatePassword, userpassword) {
	// Check Password Is Correct??
	return await bcrypt.compare(candidatePassword, userpassword);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
