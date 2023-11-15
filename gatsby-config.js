/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Travel Guide to Japan`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `places`,
        path: `${__dirname}/content/places`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `kanji`,
        path: `${__dirname}/content/kanjis`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
  ],
}
