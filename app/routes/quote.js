const quoteControllers = require('../controllers/quote');

const quoteRoutes = [
  {
    method: 'POST',
    path: '/api/v1/create-quote',
    config: {
      tags: ['api']
    },
    handler: quoteControllers.createQuote
  },
  {
    method: 'GET',
    path: '/api/v1/quotes',
    config: {
      tags: ['api']
    },
    handler: quoteControllers.getAllQuotes
  },
  {
    method: 'GET',
    path: '/api/v1/quotes/{quoteId}',
    config: {
      tags: ['api']
    },
    handler: quoteControllers.getQuote
  },
  {
    method: 'DELETE',
    path: '/api/v1/quotes/{quoteId}',
    config: {
      tags: ['api']
    },
    handler: quoteControllers.removeQuote
  },
  {
    method: 'PUT',
    path: '/api/v1/quotes/{quoteId}',
    config: {
      tags: ['api']
    },
    handler: quoteControllers.putQuote
  }
];

module.exports = quoteRoutes;
