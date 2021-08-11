const mongoose = require('mongoose');
const validator = require('validator');

const { appErrors } = require('../constants/appConstants');

const joinTeamSchema = new mongoose.Schema({
	text: {
		type: String,
		required: [true, 'text required'],
	},
	link: {
		type: String,
		required: [true, 'Description Required'],
	},
	buttonLabel: {
		type: String,
		required: [true, 'link Required'],
	},
});

const JoinTeam = mongoose.model('JoinTeam', joinTeamSchema);
module.exports = JoinTeam;
