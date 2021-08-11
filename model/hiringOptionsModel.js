const mongoose = require('mongoose');

const hiringSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
  items: Array,
  buttonLabel: {
    type: String,
  },
  buttonLink: {
    type: String,
  },
});

const Hiring = mongoose.model('Hiring', hiringSchema);
module.exports = Hiring;
