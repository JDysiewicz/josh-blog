import React from "react";

import styled from "@emotion/styled";
import { Link } from "gatsby";

const ArticleLinkStyled = styled.article`
    display: block;

    & h2 {
        font-size: 2.25rem;
        color: #9200D6;
        margin-bottom: 0.5rem;
    };

    & p {
        margin-top: 0.5rem;
    }

    & a {
        text-decoration: none;
        color: #9200D6;
    }

    & small {
        color: #000;
        font-size: 1.25rem;
    }
`;

export default ({article}) => {

    return (
        <ArticleLinkStyled to={article.slug}>
            <header>
                <h2><Link to={article.slug}>{article.title}</Link></h2>
                <small>{article.date} - {article.readingTime}</small>
            </header>
            <p>{article.spoiler}</p>
        </ArticleLinkStyled>      
    )
};