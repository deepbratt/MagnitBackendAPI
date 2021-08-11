const mongoose = require('mongoose');

const benifitsSchema = new mongoose.Schema({
	image: {
		type: String,
	},
	title: {
		type: String,
		required: [true, 'title is required'],
	},
	type: {
		type: String,
		required: [true, 'Type is required'],
	},
	description: {
		type: String,
	},
	buttonLabel: {
		type: String,
	},
	buttonLink: {
		type: String,
	},
});

const Benifits = mongoose.model('Benifits', benifitsSchema);

module.exports = Benifits;
