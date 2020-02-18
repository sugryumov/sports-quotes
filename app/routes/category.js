const Joi = require('@hapi/joi');
const controller = require('../controllers/category');

const categoryRoutes = [
  {
    method: 'GET',
    path: '/api/categories',
    options: {
      tags: ['api', 'category']
    },
    handler: controller.getAll
  },
  {
    method: 'POST',
    path: '/api/create-category',
    options: {
      tags: ['api', 'category'],
      auth: {
        strategy: 'users'
      },
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
    path: '/api/categories/{categoryId}',
    options: {
      tags: ['api', 'category'],
      auth: {
        strategy: 'users'
      },
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
    path: '/api/categories/{categoryId}',
    options: {
      tags: ['api', 'category'],
      auth: {
        strategy: 'users'
      },
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
