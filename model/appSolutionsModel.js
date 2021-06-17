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
			icon: String,
			title: String,
			text: String,
		},
	],
});

const AppSolution = mongoose.model('AppSolution', appSolutionSchema);
module.exports = AppSolution;
