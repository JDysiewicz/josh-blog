import React from "react";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import ArticleLayout from "../components/Layouts/ArticleLayout";

export const query = graphql`
    query($slug: String!) {
        mdx (frontmatter: {slug: { eq: $slug}}){
            frontmatter {
                title
                date
                readingTime
            }
            body
        }
    }
`;


const PostTemplate = ({ data: { mdx: post } }) => (
    <ArticleLayout>
        <h1 className="post-title">{post.frontmatter.title}</h1>
        <small className="post-small">{post.frontmatter.date} - {post.frontmatter.readingTime}</small>
        <div className="article">
            <MDXRenderer>{post.body}</MDXRenderer>
        </div>
    </ArticleLayout>
);

export default PostTemplate;