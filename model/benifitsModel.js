const mongoose = require('mongoose');

const benifitsSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true,
    unique: [true, 'A Title should be unique'],
  },
  description: {
    type: String,
  },
});

const Benifits = mongoose.model('Benifits', benifitsSchema);

module.exports = Benifits;
