const mongoose = require('mongoose');
const validator = require('validator');

const { appErrors } = require('../constants/appConstants');

const sectionObj = {
	queryParams: Object,
	order: Number,
	title: String,
	subTitle: String,
	dataArray: { type: Array, default: undefined },
};

const pageSchema = new mongoose.Schema({
	metaData: {
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
	},
	sections: {
		banner: {
			...sectionObj,
		},
		services: {
			...sectionObj,
		},
		reviews: {
			...sectionObj,
		},
		homeSlider: {
			...sectionObj,
		},
		awards: {
			...sectionObj,
		},
		company: {
			...sectionObj,
		},
		opportunites: {
			...sectionObj,
		},
		trainingCertification: {
			...sectionObj,
		},
		workFlow: {
			...sectionObj,
		},
		joinTeam: {
			...sectionObj,
		},
		jobBenifits: {
			...sectionObj,
		},
		FAQs: {
			...sectionObj,
		},
		appAdminPanel: {
			...sectionObj,
		},
		appSolutions: {
			...sectionObj,
		},
		blogs: {
			...sectionObj,
		},
		benefits: {
			...sectionObj,
		},
		hiringOptions: {
			...sectionObj,
		},
		factsAboutUs: {
			...sectionObj,
		},
		ourWork: {
			...sectionObj,
		},
		ourObjectives: {
			...sectionObj,
		},
		howitWorks: {
			...sectionObj,
		},
		caseStudies: {
			...sectionObj,
		},
	},
});

pageSchema.index({ 'metaData.canonical': 1 });

const Page = mongoose.model('Page', pageSchema);
module.exports = Page;
