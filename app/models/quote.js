const mongoose = require('mongoose');

const QuoteSchema = mongoose.Schema({
  quote: String,
  author: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Quotes', QuoteSchema);
