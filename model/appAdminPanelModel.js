const mongoose = require('mongoose');
const validator = require('validator');

const { appErrors } = require('../constants/appConstants');

const adminPanelSchema = new mongoose.Schema({
	image: {
		type: String,
		required: [true, appErrors.IMAGE_REQUIRED],
	},
	description: {
		type: String,
		required: [true, 'Description Required'],
	},
});

const AdminPanel = mongoose.model('AdminPanel', adminPanelSchema);
module.exports = AdminPanel;
