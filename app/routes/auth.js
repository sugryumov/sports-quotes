const Joi = require('@hapi/joi');
const controller = require('../controllers/auth');

const authRoutes = [
  {
    method: 'POST',
    path: '/api/auth/registration',
    options: {
      tags: ['api', 'auth'],
      validate: {
        payload: Joi.object({
          email: Joi.string()
            .email()
            .required(),
          password: Joi.string()
            .min(4)
            .required()
        })
      }
    },
    handler: controller.registration
  },
  {
    method: 'POST',
    path: '/api/auth/login',
    options: {
      tags: ['api', 'auth'],
      validate: {
        payload: Joi.object({
          email: Joi.string()
            .email()
            .required(),
          password: Joi.string()
            .min(4)
            .required()
        })
      }
    },
    handler: controller.login
  },
  {
    method: 'GET',
    path: '/api/auth/users',
    options: {
      tags: ['api', 'auth'],
      auth: {
        strategy: 'users'
      }
    },
    handler: controller.getAll
  },
  {
    method: 'DELETE',
    path: '/api/auth/users/{userId}',
    options: {
      tags: ['api', 'auth'],
      auth: {
        strategy: 'users'
      },
      validate: {
        params: Joi.object({
          userId: Joi.string()
        })
      }
    },
    handler: controller.remove
  }
];

module.exports = authRoutes;
