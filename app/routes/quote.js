const Joi = require('@hapi/joi');
const quoteControllers = require('../controllers/quote');

const quoteRoutes = [
  {
    method: 'POST',
    path: '/api/v1/create-quote',
    handler: quoteControllers.createQuote,
    options: {
      tags: ['api'],
      validate: {
        payload: Joi.object({
          quote: Joi.string()
            .min(10)
            .required(),
          author: Joi.string()
            .min(3)
            .required(),
          category: Joi.string()
            .min(3)
            .required()
        })
      }
    }
  },
  {
    method: 'GET',
    path: '/api/v1/quotes',
    options: {
      tags: ['api'],
      validate: {
        query: Joi.object({
          limit: Joi.number()
            .integer()
            .min(1),
          offset: Joi.number().integer(),
          category: Joi.string().min(3)
        })
      }
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
    options: {
      tags: ['api'],
      validate: {
        params: Joi.object({
          quoteId: Joi.string()
        })
      }
    },
    handler: quoteControllers.removeQuote
  },
  {
    method: 'PUT',
    path: '/api/v1/quotes/{quoteId}',
    options: {
      tags: ['api'],
      validate: {
        payload: Joi.object({
          quote: Joi.string().min(10),
          author: Joi.string().min(3),
          category: Joi.string().min(3)
        })
      }
    },
    handler: quoteControllers.putQuote
  }
];

module.exports = quoteRoutes;
