const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
    required: [true, 'Blog Must have a Title'],
    unique: [true, 'A blog Title must be unique'],
  },
  text: {
    type: String,
  },
  link: {
    type: String,
  },
  buttonLabel: {
    type: String,
  },
  views: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    required:true,
  },

});

blogsSchema.pre('save', function (next) {
  this.date = new Date(this.date).toLocaleDateString
  next();
});

const Blogs = mongoose.model('Blogs', blogsSchema);
module.exports = Blogs;
