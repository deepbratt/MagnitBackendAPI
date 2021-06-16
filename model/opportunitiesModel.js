const mongoose = require('mongoose');

const opportunitesSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: [true, 'A title should be unique'],
	},
	location: {
		type: String,
	},
	link: {
		type: String,
	},
	buttonLabel: {
		type: String,
	},
});

const Opportunite = mongoose.model('Opportunites', opportunitesSchema);
module.exports = Opportunite;