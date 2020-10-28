import React from "react";

import ArticleLink from "./ArticleLink";
import usePosts from "../hooks/usePosts";

export default () => {
    const posts = usePosts();

    const renderArticles = () => {
        return posts.map(article => {
            return <ArticleLink key={article.slug} article={article} />
        });
    };

    return (
        <>
            {renderArticles()}
        </>
    )
};