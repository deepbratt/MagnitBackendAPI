const mongoose = require('mongoose');
const validator = require('validator');

const { appErrors } = require('../constants/appConstants');

const appSolutionSchema = new mongoose.Schema({
	image: {
		type: String,
		required: [true, appErrors.IMAGE_REQUIRED],
	},
	dataArray: [
		{
			icon: { type: String, required: [true, `icon/${appErrors.IMAGE_REQUIRED}`] },
			title: { type: String, required: [true, appErrors.TITLE_REQUIRED] },
			text: { type: String, required: [true, appErrors.TEXT_REQUIRED] },
		},
	],
});

const AppSolution = mongoose.model('AppSolution', appSolutionSchema);
module.exports = AppSolution;
