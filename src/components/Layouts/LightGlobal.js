import React from "react";
import styled from "@emotion/styled"

const GlobalLayout = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=PT+Sans&display=swap");
    font-family: 'PT Sans', sans-serif;
    margin-left: auto;
    margin-right: auto;
    max-width: 42rem;
    padding: 2.625rem 1.3125rem;
    font-weight: 500;
    word-wrap: break-word;
    font-kerning: normal;
    font-size: 1.5rem;
    color: #666;
`;

export default ({children}) => (
    <GlobalLayout>
        {children}
    </GlobalLayout>
);