import React from "react";

import styled from "@emotion/styled";

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
        <ArticleLinkStyled>
            <header>
                <h2><a href="#">{article.title}</a></h2>
                <small>{article.date} - 📖 {article.ttr} min</small>
            </header>
            <p>{article.spoiler}</p>
        </ArticleLinkStyled>      
    )
};