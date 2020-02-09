const Pack = require('../package');

const swaggerOptions = {
  info: {
    title: 'Sports quotes API',
    version: Pack.version
  },
  grouping: 'tags'
};

module.exports = swaggerOptions;
