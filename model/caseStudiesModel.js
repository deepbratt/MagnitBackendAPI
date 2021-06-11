const mongoose = require('mongoose');

const caseStudiesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: [true, 'A title should be unique'],
  },
  text: {
    type: String,
  },
  icon: {
    type: String,
  },
});

const CaseStudies = mongoose.model('CaseStudies', caseStudiesSchema);

module.exports = CaseStudies;
