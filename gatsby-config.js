module.exports = {
  siteMetadata: {
    title: "Joshua Dysiewicz Blog",
    description: "A blog created by Joshua Dysiewicz, focussing on web development using javascript and react"
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layouts/ArticleLayout.js")
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              terminal: "carbon",
              noInlineHighlight: false,
              inlineCodeMarker: "÷"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 880,
              minWidth: 400,
              quality: 90,
              showCaptions: ["title", "alt"]
            },
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "posts",
        path: "posts",
      },
    },
  ]
}
