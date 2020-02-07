const Joi = require('@hapi/joi');
const controller = require('../controllers/quote');

const quoteRoutes = [
  {
    method: 'POST',
    path: '/api/v1/create-quote',
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
    },
    handler: controller.createQuote
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
    handler: controller.getAllQuotes
  },
  {
    method: 'GET',
    path: '/api/v1/quotes/{quoteId}',
    config: {
      tags: ['api']
    },
    handler: controller.getQuote
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
    handler: controller.removeQuote
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
    handler: controller.putQuote
  }
];

module.exports = quoteRoutes;
