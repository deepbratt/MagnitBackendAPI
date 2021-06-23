const mongoose = require('mongoose');
const validator = require('validator');

const { appErrors } = require('../constants/appConstants');

const pageSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'title is required'],
	},
	canonical: {
		type: String,
		unique: true,
		required: [true, `Canonial is required`],
	},
	description: {
		type: String,
		required: [true, 'description is required'],
	},
	keywords: {
		type: String,
		required: [true, 'keywords are required'],
	},
	banner: {
		type: mongoose.Schema.ObjectId,
		ref: 'Banner',
	},
	services:String,
	reviews: String,
	homeSlider: {
		type: Boolean,
		default: false,
	},
	awards: {
		type: Boolean,
		default: false,
	},
	company: {
		type: mongoose.Schema.ObjectId,
		ref: 'Company',
	},
	opportunites: String,
	trainingCertification:String,
	workFlow: {
		type: mongoose.Schema.ObjectId,
		ref: 'Workflow',
	},
	joinTeam: String,
	jobBenifits: String,
	FAQs: String,
	appAdminPanel: String,
	appSolutions: String,
	blogs: String,
	benefits: String,
	hiringOptions: String,
	factsAboutUs: String,
	ourWork: String,
	ourObjectives: String,
	howitWorks: String,
});

pageSchema.index({ canonical: 1 });

const Page = mongoose.model('Page', pageSchema);
module.exports = Page;
