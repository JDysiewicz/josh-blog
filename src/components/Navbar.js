import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const NavbarStyled = styled.div`
    margin-bottom: 3rem;
    margin-top: -2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & h1{
        font-size: 3rem;
        color: #000000;
        border-bottom: 2px solid #D60044;
        border-width: thick;
        padding-right: 1em;
        margin-right: 1em;
        border-radius: 5px;

    }

    & div {
        justify-self: flex-end
    }


    @media screen and (max-width: 810px){
        flex-direction: column;
        & h1 {
            margin-top: 0.2em;
            padding-right: 0.5em;
            padding-left: 0.5em;
            margin-left: -0.5em;
            margin-right: -0.5em;
        }

        & div {
            margin-top: 0.4em;

        }
    }
`;

const NavbarLink = styled(Link)`
    height: 30%;
    align-self: center;
    padding: 1rem;
    background-color: #D60044;
    color: #FFF;
    border-radius: 10px;
    margin: 0.5rem;
    text-decoration: none;
    font-size: 1.5rem;

    & a:first-of-type {
        margin-left: 1rem;
    }

`;



export default ({title}) => {
    return (
        <NavbarStyled>
            {title && <h1>{title}</h1>}
            {!title && <h1>Article</h1>}
            <div>
                <NavbarLink to="/">About</NavbarLink>
                <NavbarLink to="/articles">Articles</NavbarLink>
            </div>
        </NavbarStyled>
    )
};