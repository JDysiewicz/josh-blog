import React from "react";
import { Link } from "gatsby"
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

    }

    & div {
        justify-self: flex-end
    }


    @media screen and (max-width: 810px){
        flex-direction: column;
        & h1 {
            margin-top: 0.2em;
        }

        & div {
            margin-top: 0.4em;
            font-weight: 600;
        }
    }
`;

const NavbarLink = styled(Link)`
    height: 30%;
    align-self: center;
    padding: 1rem;
    background-color: #A583B4;
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
                <NavbarLink to="/articles">Article</NavbarLink>
            </div>
        </NavbarStyled>
    )
};