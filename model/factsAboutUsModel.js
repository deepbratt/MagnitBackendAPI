const mongoose = require('mongoose');

const factsAboutUsSchema = new mongoose.Schema({
  icon: {
    type: String,
  },
  title: {
    type: String,
    required: true,
    unique: [true, 'A Title should be unique'],
  },
  text: {
    type: String,
  },
});

const Facts = mongoose.model('Facts', factsAboutUsSchema);

module.exports = Facts;
