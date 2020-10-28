import React from "react";
import styled from "@emotion/styled"

const ArticleListLayout = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=PT+Sans&display=swap");
    font-family: 'PT Sans', sans-serif;
    margin: 0 auto;
    max-width: 40vw;
    padding: 0 1rem;

    & h2{
        font-size: 2rem;
    }
`;

export default ({children}) => (
    <ArticleListLayout>
        {children}
    </ArticleListLayout>
);