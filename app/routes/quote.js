const Joi = require('@hapi/joi');
const controller = require('../controllers/quote');

const quoteRoutes = [
  {
    method: 'POST',
    path: '/api/create-quote',
    options: {
      tags: ['api', 'quote'],
      auth: {
        strategy: 'users'
      },
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
    },
    handler: controller.createQuote
  },
  {
    method: 'GET',
    path: '/api/quotes',
    options: {
      tags: ['api', 'quote'],
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
    handler: controller.getAllQuotes
  },
  {
    method: 'GET',
    path: '/api/quotes/{quoteId}',
    config: {
      tags: ['api', 'quote']
    },
    handler: controller.getQuote
  },
  {
    method: 'DELETE',
    path: '/api/quotes/{quoteId}',
    options: {
      tags: ['api', 'quote'],
      auth: {
        strategy: 'users'
      },
      validate: {
        params: Joi.object({
          quoteId: Joi.string()
        })
      }
    },
    handler: controller.removeQuote
  },
  {
    method: 'PUT',
    path: '/api/quotes/{quoteId}',
    options: {
      tags: ['api', 'quote'],
      auth: {
        strategy: 'users'
      },
      validate: {
        payload: Joi.object({
          quote: Joi.string().min(10),
          author: Joi.string().min(3),
          category: Joi.string().min(3)
        })
      }
    },
    handler: controller.putQuote
  }
];

module.exports = quoteRoutes;
