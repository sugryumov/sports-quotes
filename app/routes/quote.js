const quoteControllers = require('../controllers/quote');

const quoteRoutes = [
  {
    method: 'POST',
    path: '/create-quote',
    config: {
      tags: ['api']
    },
    handler: quoteControllers.createQuote
  },
  {
    method: 'GET',
    path: '/quotes',
    config: {
      tags: ['api']
    },
    handler: quoteControllers.getAllQuotes
  },
  {
    method: 'GET',
    path: '/quotes/{quoteId}',
    config: {
      tags: ['api']
    },
    handler: quoteControllers.getQuote
  },
  {
    method: 'DELETE',
    path: '/quotes/{quoteId}',
    config: {
      tags: ['api']
    },
    handler: quoteControllers.removeQuote
  },
  {
    method: 'PUT',
    path: '/quotes/{quoteId}',
    config: {
      tags: ['api']
    },
    handler: quoteControllers.putQuote
  }
];

module.exports = quoteRoutes;
