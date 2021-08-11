const mongoose = require('mongoose');
const { appErrors } = require('../constants/appConstants');

const blogsSchema = new mongoose.Schema({
	banner: {
		type: String,
		required: [true, appErrors.IMAGE_REQUIRED],
	},
	title: {
		type: String,
		required: [true, 'Blog Must have a Title'],
	},
	canonical: {
		type: String,
		required: [true, 'Blog Must have a canonical'],
		unique: [true, 'A blog canonical must be unique'],
	},
	description: {
		type: String,
	},
	descriptionLong: {
		type: String,
	},
	keywords: {
		type: String,
	},
	type: {
		type: String,
		required: [true, 'Type is Required'],
		enum: {
			values: ['draft', 'publish'],
			message: 'Type is either draft or publish',
		},
	},
	views: {
		type: Number,
		default: 0,
	},
	date: {
		type: Date,
		required: true,
	},
	html: {
		type: String,
		required: [true, 'Blog required'],
	},
});

blogsSchema.pre('save', function (next) {
	this.date = new Date(this.date).toLocaleDateString;
	next();
});

const Blogs = mongoose.model('Blogs', blogsSchema);
module.exports = Blogs;
