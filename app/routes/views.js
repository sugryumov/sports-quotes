const viewsRoutes = [
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'out',
        index: ['index.html']
      }
    }
  }
];

module.exports = viewsRoutes;
