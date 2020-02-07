const Joi = require('@hapi/joi');
const controller = require('../controllers/category');

const categoryRoutes = [
  {
    method: 'GET',
    path: '/api/v1/categories',
    options: {
      tags: ['api']
    },
    handler: controller.getAll
  },
  {
    method: 'POST',
    path: '/api/v1/create-category',
    options: {
      tags: ['api'],
      validate: {
        payload: Joi.object({
          name: Joi.string()
            .min(3)
            .required()
        })
      }
    },
    handler: controller.create
  },
  {
    method: 'DELETE',
    path: '/api/v1/categories/{categoryId}',
    options: {
      tags: ['api'],
      validate: {
        params: Joi.object({
          categoryId: Joi.string()
        })
      }
    },
    handler: controller.remove
  },
  {
    method: 'PUT',
    path: '/api/v1/categories/{categoryId}',
    options: {
      tags: ['api'],
      validate: {
        payload: Joi.object({
          name: Joi.string()
            .min(3)
            .required()
        })
      }
    },
    handler: controller.update
  }
];

module.exports = categoryRoutes;
