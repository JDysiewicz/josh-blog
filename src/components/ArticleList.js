import React from "react";

import ArticleLink from "./ArticleLink";

export default () => {
    const renderArticles = () => {
        const articles = [
            {title: "How React Works", date: "July 12, 2020", ttr: "5", spoiler: "This is a test of the third article"},
            {title: "JavaScript: Fundamentals", date: "July 10, 2020", ttr: "15", spoiler: "This is a test of the second article"},
            {title: "My First Ever Post!!!", date: "June 6, 2020", ttr: "30", spoiler: "This is a test of the first article"}
        ];

        return articles.map(article => {
            return <ArticleLink article={article} />
        });
    };

    return (
        <>
            {renderArticles()}
        </>
    )
};