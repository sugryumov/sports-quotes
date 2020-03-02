module.exports = {
  siteMetadata: {
    title: `Name Site`,
    description: `About your site`,
    author: `@pupkin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-top-layout",
    "gatsby-plugin-typescript",
    "gatsby-plugin-offline",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
    //   },
    // },
  ],
}