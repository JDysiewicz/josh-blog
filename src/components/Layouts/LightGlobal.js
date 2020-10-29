import React from "react";
import styled from "@emotion/styled"
import Helmet from "react-helmet";

import useSiteMetadata from "../../hooks/useSiteMetadata";
import "../../styles/global.scss";

const GlobalLayout = styled.div`
    /* PT Sans vs Source Sans Pro.... Hard to decide */
    
    font-family: "Source Sans Pro", sans-serif;

    margin-left: auto;
    margin-right: auto;
    max-width: 55rem;
    padding: 2.625rem 1.3125rem;
    font-weight: 500;
    font-kerning: normal;
    font-size: 1.5rem;
    color: #666;
    line-height: 1.5;
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