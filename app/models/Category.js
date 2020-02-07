const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('categories', categorySchema);
