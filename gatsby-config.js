module.exports = {
  siteMetadata: {
    title: "Joshua Dysiewicz Blog",
    description: "A blog created by Joshua Dysiewicz, focussing on web development using javascript and react"
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layouts/ArticleLayout.js")
        },
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
