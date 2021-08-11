const mongoose = require('mongoose');

const jobBenifitsSchema = new mongoose.Schema({
	icon: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
		unique: [true, 'A title should be unique'],
	},
	text: {
		type: String,
	},
	link: {
		type: String,
	},
	buttonLabel: {
		type: String,
	}
});

const JobBenifit = mongoose.model('JobBenifit', jobBenifitsSchema);
module.exports = JobBenifit;
