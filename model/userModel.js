const mongoose = require('mongoose');
const validator = require('validator');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

const { appErrors } = require('../constants/appConstants');

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		minlength: 3,
		maxlength: 15,
		required: [true, appErrors.FIRSTNAME_REQUIRED],
		validate: [validator.isAlpha, appErrors.INVALID_FIRSTNAME],
	},
	lastName: {
		type: String,
		minlength: 3,
		maxlength: 15,
		required: [true, appErrors.LASTNAME_REQUIRED],
		validate: [validator.isAlpha, appErrors.INVALID_LASTNAME],
	},
	email: {
		type: String,
		required: [true, appErrors.EMAIL_REQUIRED],
		unique: true,
		lowercase: true,
		validate: [validator.isEmail, appErrors.INVALID_EMAIL],
	},
	phone: {
		type: String,
		validate: [validator.isMobilePhone, appErrors.INVALID_PHONE_NUM],
	},
	role: {
		type: String,
		enum: ['Admin', 'Moderator'],
	},
	password: {
		type: String,
		required: [true, appErrors.PASSWORD_REQUIRED],
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
			message: appErrors.PASSWORD_MISMATCH,
		},
	},
	dateOfjoin: {
		type: Date,
		required: true,
		default: Date.now(),
	},
	passwordChangedAt: Date,
	passwordResetToken: String,
	passwordResetExpires: Date,
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

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
	if (this.passwordChangedAt) {
		const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
		return JWTTimestamp < changedTimestamp;
	}
	return false;
};
userSchema.methods.createPasswordResetToken = function () {
	const resetToken = crypto.randomBytes(32).toString('hex');
	this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
	console.log(resetToken, this.passwordResetToken);
	this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
	return resetToken;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
