const withSass = require('@zeit/next-sass');
const withFonts = require('nextjs-fonts');

module.exports = withSass(withFonts({
  exportTrailingSlash: true,
  devIndicators: {
    autoPrerender: false,
  },
  exportPathMap: function () {
    return {
      "/": {
        page: "/"
      },
      "/admin": {
        page: "/admin"
      },
      "/admin/auth": {
        page: "/admin/auth"
      }
    };
  }
}))

// для добавления динамических страниц

// const fetch = require('isomorphic-unfetch');

// exportPathMap: async function() {
//   const paths = {
//     '/': { page: '/' },
//     '/about': { page: '/about' }
//   };
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();
//   const shows = data.map(entry => entry.show);

//   shows.forEach(show => {
//     paths[`/show/${show.id}`] = { page: '/show/[id]', query: { id: show.id } };
//   });

//   return paths;
// }