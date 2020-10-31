import React from "react";
import styled from "@emotion/styled"
// import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import LightGlobal from "./LightGlobal";

import Navbar from "../Navbar";

// deckDeckGoHighlightElement();

const ArticleLayout = styled.div`
    
    & .post-title {
        font-family: "Merriweather", sans-serif;
        color: #00B39E;
        font-size: 2.5rem;
        font-weight: 900;
        margin-bottom: 1rem;
    }

    & .post-small {
        color: #000;
        font-size: 1.4rem;
        font-weight: 500;
    }

    & .article {
        color: #232323;
        font-size: 1.5rem;
        line-height: 1.75;

        & h2 {
            color: #ff75a1
            
        }

        & h3 {
            color: #A583B4;
        }

        & .gatsby-resp-image-figcaption {
            text-align: center;
            font-size: 1.25rem;
            font-style: italic;
        }

        & .gatsby-resp-image-background-image {
            background-color: #EFEEEF;
            border-radius: 10px;
        }

        & img.gatsby-resp-image-image {
            background-color: #EFEEEF;
            border-radius: 10px;
        }

        & blockquote{
            background-color: #9bdeac;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            border-radius: 10px;

        }
    }

    

    & .gatsby-highlight pre[class*="language-"]{
        border: none;
        overflow-wrap: normal;
    }

    & p code[class*="language-"]{
        border: none;
        overflow-wrap: break-word;
    }

    @media screen and (max-width: 900px){

    }

`;

export default ({children}) => (
    <LightGlobal>
        <ArticleLayout>
            <Navbar />
            {children}
        </ArticleLayout>
    </LightGlobal>
);