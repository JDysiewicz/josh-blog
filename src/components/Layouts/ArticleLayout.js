import React from "react";
import styled from "@emotion/styled"
import LightGlobal from "./LightGlobal";

import Navbar from "../Navbar";

const ArticleLayout = styled.div`
    & h1 {
        color: purple;
    }

    & h2 {
        color: pink;
    }
    color: black;
`;

export default ({children}) => (
    <LightGlobal>
        <ArticleLayout>
            <Navbar />
            {children}
        </ArticleLayout>
    </LightGlobal>
);