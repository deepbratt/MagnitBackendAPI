const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, 'A banner must have heading'],
  },
  subHeading: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  type: {
    type: String,
  },
  buttonLabel: {
    type: String,
  },
  buttonLink: {
    type: String,
  },
});

const Banner = mongoose.model('Banner', bannerSchema);
module.exports = Banner;
