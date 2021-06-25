const mongoose = require('mongoose');
//const { servicesEnum } = require('../utils/scripts');

const servicesSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  type: {
    type: String,
    enum: {
      values: ['Parent', 'Child'],
      message: 'Service is Either Parent or Child.',
    },
  },
  category: {
    type: String,
    required: false,
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
