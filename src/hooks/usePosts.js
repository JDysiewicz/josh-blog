import { graphql, useStaticQuery } from "gatsby";

const usePosts = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx {
                nodes {
                    frontmatter {
                        title
                        slug
                        readingTime
                        date
                        spoiler
                    }
                }
            }
        }
    `);

    return data.allMdx.nodes.map(post => ({
        title: post.frontmatter.title,
        date: post.frontmatter.date,
        readingTime: post.frontmatter.readingTime,
        spoiler: post.frontmatter.spoiler,
        slug: post.frontmatter.slug
    }))
};

export default usePosts;