const mongoose = require('mongoose');

const sliderSchema = new mongoose.Schema({
  backgroundImage: {
    type: String,
  },
  title: {
    type: String,
    unique: [true, 'Title should be Unique'],
    required: true,
  },
  items: Array,
  buttonLabel: {
    type: String,
  },
  buttonLink: {
    type: String,
  },
});

const Slider = mongoose.model('Slider', sliderSchema);

module.exports = Slider;
