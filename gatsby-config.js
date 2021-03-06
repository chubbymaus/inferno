module.exports = {
  siteMetadata: {
    title: "Inferno Apps",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "ongr1ksr0e0k",
        accessToken:
          "c0bdb9b960672344a5bf1a668dd1941a311e18970cdff053fe7fc0299ef1b23a",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Inferno apps",
        short_name: "Inferno",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/infernofav.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
  ],
}
