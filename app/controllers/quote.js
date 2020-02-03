const Quote = require('../models/quote');

const createQuote = async (request, h) => {
  try {
    const quote = new Quote(request.payload);
    const result = await quote.save();

    return h.response(result);
  } catch (error) {
    return h.response(error).code(500);
  }
};

const getAllQuotes = async (request, h) => {
  try {
    const quotes = await Quote.find();

    return h.response(quotes);
  } catch {
    return h.response(error).code(500);
  }
};

const getQuote = async (request, h) => {
  try {
    const quote = await Quote.findById(request.params.quoteId);

    return h.response(quote);
  } catch (error) {
    return h.response(error).code(500);
  }
};

const removeQuote = async (request, h) => {
  try {
    const deleteQuote = await Quote.findByIdAndDelete(request.params.quoteId);

    return h.response(deleteQuote);
  } catch (err) {
    return h.response(err).code(500);
  }
};

const putQuote = async (request, h) => {
  try {
    const updateQuote = await Quote.findByIdAndUpdate(
      request.params.quoteId,
      request.payload,
      { new: true }
    );

    return h.response(updateQuote);
  } catch (err) {
    return h.response(err).code(500);
  }
};

module.exports = {
  createQuote,
  getAllQuotes,
  getQuote,
  removeQuote,
  putQuote
};
