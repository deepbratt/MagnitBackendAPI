const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true,
    unique: [true, 'A Title must be unique'],
  },
  description: {
    type: String,
  },
  buttonLabel: {
    type: String,
  },
  buttonLink: {
    type: String,
  },
  color: {
    type: String,
  },
});

const Services = mongoose.model('Services', servicesSchema);

module.exports = Services;
