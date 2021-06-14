const mongoose = require('mongoose');

const workflowSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, 'Workflow must have image'],
  },
});

const Workflow = mongoose.model('Workflow', workflowSchema);
module.exports = Workflow;
