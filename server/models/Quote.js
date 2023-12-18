const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: 'Invalid email address',
    },
  },
  phone: {
    type: Number,
  },
  company: {
    type: String,
  },
  website: {
    type: String,
    validate: {
      validator: function (value) {
        return value === '' || /^(ftp|http|https):\/\/[^ "]+$/.test(value);
      },
      message: 'Invalid URL',
    },
  },
  projectType: {
    type: String,
    required: [true, 'Project type is required'],
  },
  projectGoals: {
    type: String,
    required: [true, 'Project goals are required'],
  },
  budget: {
    type: String,
    required: [true, 'Budget is required'],
  },
  message: {
    type: String,
  },
});

// Create a Mongoose model
const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
