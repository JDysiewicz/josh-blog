exports.createPages = async ({actions, graphql, reporter}) => {
    const result = await graphql(`
        query {
            allMdx {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `);

    if (result.errors){
        reporter.panic("Failed to create posts", result.errors);
    };

    const posts = result.data.allMdx.nodes;
 
    posts.forEach(post => {
        console.log("Slug", post.frontmatter.slug)
        actions.createPage({
            path: `articles/${post.frontmatter.slug}`,
            component: require.resolve("./src/templates/post.js"),
            context : {
                slug: post.frontmatter.slug
            },
        });
    });
};