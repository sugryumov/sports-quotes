const viewsRoutes = [
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public',
        index: ['index.html']
      }
    }
  }
];

module.exports = viewsRoutes;
