const Joi = require("@hapi/joi");
const controller = require("../controllers/offerQuote");

const offerQuoteRoutes = [
  {
    method: "POST",
    path: "/api/offer",
    options: {
      tags: ["api", "offerQuote"],
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
    handler: controller.createOfferQuote
  },
  {
    method: "GET",
    path: "/api/offer",
    options: {
      tags: ["api", "offerQuote"],
      auth: {
        strategy: "users"
      }
    },
    handler: controller.getOfferQuote
  },
  {
    method: "DELETE",
    path: "/api/offer/{offerQuoteId}",
    options: {
      tags: ["api", "offerQuote"],
      auth: {
        strategy: "users"
      },
      validate: {
        params: Joi.object({
          offerQuoteId: Joi.string()
        })
      }
    },
    handler: controller.removeOfferQuote
  },
  {
    method: "PUT",
    path: "/api/offer/{offerQuoteId}",
    options: {
      tags: ["api", "offerQuote"],
      auth: {
        strategy: "users"
      },
      validate: {
        params: Joi.object({
          offerQuoteId: Joi.string()
        })
      }
    },
    handler: controller.updateOfferQuote
  }
];

module.exports = offerQuoteRoutes;
