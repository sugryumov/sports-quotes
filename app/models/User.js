const mongoose = require('mongoose');

const userSchrma = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('users', userSchrma);
