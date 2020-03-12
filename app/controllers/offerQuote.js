const OfferQuote = require("../models/OfferQuote");

const createOfferQuote = async (request, h) => {
  try {
    const quote = new OfferQuote(request.payload);
    const result = await quote.save();

    return h.response(result);
  } catch (err) {
    return h.response(err).code(500);
  }
};

const getOfferQuote = async (request, h) => {
  try {
    const quote = await OfferQuote.find();

    return h.response(quote);
  } catch (err) {
    return h.response(err).code(500);
  }
};

const removeOfferQuote = async (request, h) => {
  try {
    const deleteOfferQuote = await OfferQuote.findByIdAndDelete(
      request.params.offerQuoteId
    );

    return h.response(deleteOfferQuote);
  } catch (err) {
    return h.response(err).code(500);
  }
};

const updateOfferQuote = async (request, h) => {
  try {
    const updateOfferQuote = await OfferQuote.findByIdAndUpdate(
      request.params.offerQuoteId,
      request.payload,
      { new: true }
    );

    return h.response(updateOfferQuote);
  } catch (err) {
    return h.response(err).code(500);
  }
};

module.exports = {
  createOfferQuote,
  getOfferQuote,
  removeOfferQuote,
  updateOfferQuote
};
