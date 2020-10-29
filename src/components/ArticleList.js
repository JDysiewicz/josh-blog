import React from "react";

import ArticleLink from "./ArticleLink";
import usePosts from "../hooks/usePosts";

export default () => {
    const posts = usePosts();

    // Reverse to sort by most recent
    const renderArticles = () => {
        return posts.reverse().map(article => {
            return <ArticleLink key={article.slug} article={article} />
        });
    };

    return (
        <>
            {renderArticles()}
        </>
    )
};