import React from "react";
import styled from "@emotion/styled"
// import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import LightGlobal from "./LightGlobal";

import Navbar from "../Navbar";
import { Helmet } from "react-helmet";

// deckDeckGoHighlightElement();
// color: #00B39E; Vue-like Green
const ArticleLayout = styled.div`

    & .post-title {
        font-family: "Merriweather", sans-serif;
        color: #1E90B3;
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
        font-size: 20px;
        font-stretch: normal;
        font-family: "Source Sans Pro", Roboto, sans-serif;
        line-height: 1.5;
        

        & h2 {
            color: #D60044
            
        }

        & h3 {
            color: #7B568F;
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

        & .gatsby-resp-image-image {
            background-color: #EFEEEF;
            border-radius: 10px;

        }

        & .gatsby-resp-image-link {
            background-color: #EFEEEF;
            border-radius: 10px;

        }

        & blockquote{
            background-color: #9bdeac;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            border-radius: 10px;
            margin: 0;

        }

        /* centers gifs in mdx */
        & img:not(.gatsby-resp-image-image){
            display: block;
            margin: 0 auto;

            /* Expand to fill screen width */
            @media screen and (max-width: 600px){
                width: 100vw;
                margin-left: calc(-51vw + 50%);
            }
        }

        & .gatsby-highlight {
            @media screen and (max-width: 600px){
                width: 100vw;
                margin-left: calc(-51vw + 50%);
                border-radius: 0px;

                & pre[class*="language-"] {
                    border-radius: 0px;
                }
            }
        }

        & a {
        text-decoration: underline;
        text-decoration-thickness: 0.1em;
        color: #0F4E61;
        word-wrap: break-word;
        }

        & ol li:not(:last-child) {
            margin-bottom: 20px;
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



`;

export default ({children}) => {
        return (
        <LightGlobal>
            <Helmet>
                <title>{children[0].props.children}</title>
            </Helmet>
            <ArticleLayout>
                <Navbar articleTitle={`${children[0]}`} articleSmall={children[1]} />
                {children}
            </ArticleLayout>
        </LightGlobal>
    )
};