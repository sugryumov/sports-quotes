const viewsRoutes = [
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'build',
        index: ['index.html']
      }
    }
  }
];

module.exports = viewsRoutes;
