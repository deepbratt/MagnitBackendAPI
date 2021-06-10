const mongoose = require('mongoose');

const howItWorksSchema = new mongoose.Schema({
  image: String,
  text: {
    type: String,
  },
  title: {
    type: String,
    required: true,
    unique: [true, 'A title should be unique'],
  },
});

const HowItWorks = mongoose.model('HowItWorks', howItWorksSchema);

module.exports = HowItWorks;
