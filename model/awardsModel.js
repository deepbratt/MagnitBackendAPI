const mongoose = require('mongoose');

const { appErrors } = require('../constants/appConstants');

const awardsSchema = new mongoose.Schema({
	clientName: {
		type: String,
		required: [true, 'Client Name Should be unique'],
		unique: [true, 'Client Name Should be unique'],
	},
	image:{
    type: String,
    required: [true, appErrors.IMAGE_REQUIRED]
  },
	link: {
		type: String,
	},
});

const Awards = mongoose.model('Awards', awardsSchema);

module.exports = Awards;
