import React from "react";
import styled from "@emotion/styled"
import Helmet from "react-helmet";

import useSiteMetadata from "../../hooks/useSiteMetadata";

const GlobalLayout = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=PT+Sans&display=swap");
    font-family: 'PT Sans', sans-serif;
    margin-left: auto;
    margin-right: auto;
    max-width: 50rem;
    padding: 2.625rem 1.3125rem;
    font-weight: 500;
    word-wrap: break-word;
    font-kerning: normal;
    font-size: 1.5rem;
    color: #666;
`;

export default ({children}) => {

    const { title, description } = useSiteMetadata();

    return (
    <GlobalLayout>
        <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
        {children}
    </GlobalLayout>
)};