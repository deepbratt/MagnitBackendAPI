const mongoose = require('mongoose');
const { appErrors } = require('../constants/appConstants');

const solutionsSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: [true, 'Title Should be unique'],
	},
	image: {
		type: String,
		required: [true, appErrors.IMAGE_REQUIRED],
	},
});

const Solutions = mongoose.model('Solutions', solutionsSchema);

module.exports = Solutions;
