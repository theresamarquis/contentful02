import apiKeys from './apiKeys'

const contentfulConfig = {
  spaceId: apiKeys.spaceId,
  accessToken: apiKeys.accessToken
}

module.exports = {
    plugins: [
        {
          resolve: `gatsby-plugin-typography`,
          options: {
            pathToConfigModule: `src/utils/typography.js`,
          },
        },
        {
          resolve: 'gatsby-source-contentful',
          options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
              accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken
          }
        },
        'gatsby-transformer-remark'
      ],

  }