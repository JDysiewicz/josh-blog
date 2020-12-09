import React from "react";
import styled from "@emotion/styled"
import Helmet from "react-helmet";

import useSiteMetadata from "../../hooks/useSiteMetadata";
import "../../styles/global.scss";

// background = #EFEEEF;
// old_blue = #28B3DC;
// old_pink = #ff75a1;
// new_pink = #D60044;
// new_purple = #7B568F;
// new_blue: #1E90B3;


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
    color: #4A4A4A;
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
            <meta name="google-site-verification" content="D7V2AeAkgWMhHW0VkhM1h6sm8TNYk58ecSbmN4I7W9k" />
        </Helmet>
        {children}
    </GlobalLayout>
)};