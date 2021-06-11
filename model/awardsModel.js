const mongoose = require('mongoose');

const awardsSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
    unique: [true, 'Client Name Should be unique'],
  },
  image: String,
  link: {
    type: String,
  },
});

const Awards = mongoose.model('Awards', awardsSchema);

module.exports = Awards;
