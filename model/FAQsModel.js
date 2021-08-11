const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  questions: {
    type: String,
    required: true,
  },
  answers: {
    type: String,
    required: true,
  },
});

const FAQ = mongoose.model('FAQ', faqSchema);

module.exports = FAQ;
