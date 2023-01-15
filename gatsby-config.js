require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Digital Restaurant`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/gatsby-plugin-layout/Layout.js`)
      }
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.GATSBY_SANITY_API_TOKEN,
        watchMode: process.env.GATSBY_SANITY_WATCH_MODE,
        overlayDrafts: process.env.GATSBY_SANITY_OVERLAY_DRAFTS,
        graphqlTag: 'default'
      }
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ]
};