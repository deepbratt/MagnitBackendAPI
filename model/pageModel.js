const mongoose = require('mongoose');
const validator = require('validator');

const { appErrors } = require('../constants/appConstants');

const pageSchema = new mongoose.Schema({
	pageRoute: {
		type: String,
		unique: true,
		required: [true, appErrors.NAME_REQUIRED],
	},
	banner: {
		type: mongoose.Schema.ObjectId,
		ref: 'Banner',
	},
	projects: {
		type: String,
		enum: ['None', 'All', 'Web Development'],
	},
	reviews: {
		type: Boolean,
		default: false,
	},
	homeSlider: {
		type: Boolean,
		default: false,
	},
});

const Page = mongoose.model('Page', pageSchema);
module.exports = Page;
