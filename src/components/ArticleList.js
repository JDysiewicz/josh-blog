import React from "react";

import ArticleLink from "./ArticleLink";
import usePosts from "../hooks/usePosts";

// Move this out to a utils folder one day
const recentToOld = (a, b) => {
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);
    return dateB - dateA;
};

export default () => {
    const posts = usePosts();

    // Sorts posts by most recent - making many Date objects is slow tho...
    posts.sort((a,b) => recentToOld(a, b));

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