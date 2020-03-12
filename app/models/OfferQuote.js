const mongoose = require("mongoose");

const offerQuoteSchema = mongoose.Schema({
  quote: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("offerQuote", offerQuoteSchema);
