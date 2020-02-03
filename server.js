const os = require('os');
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const swaggerOptions = require('./config/swagger');
const db = require('./config/db');
const viewsRoutes = require('./app/routes/views');
const quoteRoutes = require('./app/routes/quote');

const init = async () => {
  const ifaces = os.networkInterfaces();
  const ip = ifaces.eth0[0].address;
  const port = 8080;

  const server = Hapi.server({
    port: port
  });

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    }
  ]);

  server.route([...viewsRoutes, ...quoteRoutes]);

  await server.start();
  console.log(`Server running on http://${ip}:${port}`);
};

init();
