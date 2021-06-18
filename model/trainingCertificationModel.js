const mongoose = require('mongoose');
const validator = require('validator');

const { appErrors } = require('../constants/appConstants');

const trainingCertifictionSchema = new mongoose.Schema({
	jsonFile: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		minlength: 3,
		maxlength: 30,
		unique:true,
		required: [true, 'Please Enter Title'],
	},
	description: {
		type: String,
		minlength: 12,
		required: [true, 'Please Enter Description'],
	},
});

const TrainingCertifiction = mongoose.model('TrainingCertifiction', trainingCertifictionSchema);
module.exports = TrainingCertifiction;
