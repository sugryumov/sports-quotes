const os = require('os');
const Path = require('path');
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const swaggerOptions = require('./config/swagger');
const db = require('./config/db');
const quoteRoutes = require('./app/routes/quote');
const categoryRoutes = require('./app/routes/category');
const viewsRoutes = require('./app/routes/views');

const init = async () => {
  const ifaces = os.networkInterfaces();
  const ip = ifaces.eth0[0].address;
  const port = 8080;

  const server = Hapi.server({
    port: port,
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'client')
      },
      cors: {
        credentials: true
      }
    }
  });

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    }
  ]);

  await server.route([...quoteRoutes, ...categoryRoutes]);

  if (process.env.NODE_ENV === 'production') {
    server.route([...viewsRoutes]);
  }

  await server.start();
  console.log(`Server running on http://${ip}:${port}`);
  console.log(`Swagger documentation: http://${ip}:${port}/documentation`);
};

init();
