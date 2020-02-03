const viewsRoutes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return `<h1>Home page<h1>`;
    }
  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
      return `<h1>About page<h1>`;
    }
  },
  {
    method: 'GET',
    path: '/contact',
    handler: (request, h) => {
      return `<h1>Contact page<h1>`;
    }
  }
];

module.exports = viewsRoutes;
