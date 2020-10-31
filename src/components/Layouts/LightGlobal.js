import React from "react";
import styled from "@emotion/styled"
import Helmet from "react-helmet";

import useSiteMetadata from "../../hooks/useSiteMetadata";
import "../../styles/global.scss";

const GlobalLayout = styled.div`
    /* PT Sans vs Source Sans Pro.... Hard to decide */
    background-color: #EFEEEF;
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
    /* For that containerised view */
    /* box-shadow: 0px 0px 3px #AAA; */
    /* border-radius: 1px; */
    /* margin-bottom: 0; */
    /* margin-top: 2.5rem; */
    /* max-width: 750px; */
    /* min-height: 100vh; */

    @media screen and (max-width: 600px){
        /* margin-left: -0.8rem;
        margin-right: -0.8rem; */
        width: 90%; 
    }
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