const Joi = require('@hapi/joi');
const controller = require('../controllers/auth');

const authRoutes = [
  {
    method: 'POST',
    path: '/api/auth/registration',
    options: {
      tags: ['auth'],
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
      tags: ['auth'],
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
  }
];

module.exports = authRoutes;
