const mongoose = require('mongoose');
const validator = require('validator');

const { appErrors } = require('../constants/appConstants');

const companySchema = new mongoose.Schema({
	heading: {
		type: String,
		unique: true,
		required: [true, 'Footer heading required'],
	},
	locations: {
		heading: String,
		dataArray: [
			{
				officeType: String,
				address: String,
			},
		],
	},
	contactUs: {
		heading: String,
		dataArray: [
			{
				country: String,
				number: String,
			},
		],
	},
	socialMedia: {
		heading: String,
		dataArray: [
			{
				title: String,
				link: String,
				icon: String,
			},
		],
	},
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
