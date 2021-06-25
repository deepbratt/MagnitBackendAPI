const mongoose = require('mongoose');

const ourWorkSchema = new mongoose.Schema({
	image: {
		type: String,
	},
	type: {
		type: String,
		required: [true, 'type is required'],
	},
	title: {
		type: String,
		unique: [true, 'A title should be unique'],
		requierd: true,
	},
	description: {
		type: String,
	},
	buttonLink: {
		type: String,
	},
});

const Ourwork = mongoose.model('Ourwork', ourWorkSchema);

module.exports = Ourwork;
