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
  const query = {};

  if (request.query.start) {
    query.date = {
      $gte: request.query.start
    };
  }

  if (request.query.end) {
    if (!query.date) {
      query.date = {};
    }

    query.date['$lte'] = request.query.end;
  }

  if (request.query.quote) {
    query.quote = +request.query.quote;
  }

  try {
    const quotes = await Quote.find(query)
      .sort({ date: -1 })
      .skip(+request.query.offset)
      .limit(+req.query.limit);

    return h.response(quotes);
  } catch (err) {
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
