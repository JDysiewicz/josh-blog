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
        font-family: "Martel", serif;
        color: #1E90B3;
        font-size: 2.5rem;
        font-weight: 900;
        margin-bottom: 1rem;

        @media screen and (max-width: 810px){
            font-size: 2rem;
        }
    }

    & .post-small {
        color: #000;
        font-size: 1.2rem;
        font-weight: 500;
    }

    & .article {
        color: #232323;
        font-size: 85%;
        font-weight: 300;
        font-family: "Signika Negative", sans-serif;
        line-height: 1.6;

        @media screen and (max-width: 810px){
            font-size: 75%;
            line-height: 1.5;
        }
        

        & h2 {
            margin-top: 3rem;
            font-size: 2rem;
            font-family: "Martel", serif;
            color: #D60044;

            @media screen and (max-width: 810px){
                font-size: 1.6rem;
            }
            
        }

        & h3 {
            margin-top: 3rem;
            font-size: 1.6rem;
            font-family: "Martel", serif;
            color: #000000;

            @media screen and (max-width: 810px){
                font-size: 1.2rem;
            }
        }

        & .gatsby-resp-image-figcaption {
            text-align: center;
            font-size: 85%;
            font-style: italic;
            margin-top: 10px;
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
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            max-width: 80%;
            background-color: #B7E6F6;
            padding: 0.5rem;
            border-radius: 30px;
            border: 2px solid black;
            color: #000000;
            text-align: center;
            font-size: 100%;

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
            text-decoration: none;
            color: #D60044;
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