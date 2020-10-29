import React from "react";
import styled from "@emotion/styled"
import LightGlobal from "./LightGlobal";

import Navbar from "../Navbar";

const ArticleLayout = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap");
    & .post-title {
        font-family: "Merriweather", sans-serif;
        color: #000;
        font-size: 3.25rem;
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
        line-height: 1.5;
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