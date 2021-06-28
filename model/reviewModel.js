const mongoose = require('mongoose');
const validator = require('validator');

const { appErrors } = require('../constants/appConstants');

const reviewSchema = new mongoose.Schema({
	clientName: {
		type: String,
		minlength: 3,
		maxlength: 30,
		required: [true, appErrors.NAME_REQUIRED],
	},
	projectName: {
		type: String,
		minlength: 3,
		maxlength: 30,
		required: [true, 'Please Enter Your Project Name'],
	},
	projectType: {
		type: String,
		minlength: 3,
		maxlength: 30,
		required: [true, 'Please Enter Project Type'],
	},
	rating: {
		type: Number,
		min: [1, 'rating must be above 1.0'],
		max: [5, 'rating must be below 5.0'],
		required: [true, 'Please Enter Rating'],
	},
	review: {
		type: String,
		minlength: 12,
	},
	image: {
		type: String,
		required: [true, appErrors.IMAGE_REQUIRED],
	},
	clientImage: {
		type: String,
		required: [true, appErrors.IMAGE_REQUIRED],
	},
	Date: {
		type: Date,
		default: Date.now(),
	},
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
