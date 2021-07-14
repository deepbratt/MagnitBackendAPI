const mongoose = require('mongoose');

const seoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	h1Detail: {
		type: String,
	},
	h1Detail: {
		type: String,
	},
});

const Seo = mongoose.model('Seo', seoSchema);
module.exports = Seo;
