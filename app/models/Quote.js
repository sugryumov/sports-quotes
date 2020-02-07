const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
  quote: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  category: {
    ref: 'categories',
    type: mongoose.Schema.Types.String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('quotes', quoteSchema);
