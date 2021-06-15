const mongoose = require('mongoose');

const objectiveSchema = new mongoose.Schema({
	icon: {
		type: String,
	},
	title: {
		type: String,
		unique: [true, 'Title should be Unique'],
		required: true,
	},
	text: {
		type: String,
	},
});

const Objective = mongoose.model('Objectives', objectiveSchema);

module.exports = Objective;
