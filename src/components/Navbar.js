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
        font-size: 4rem;
        color: #000000;

    }

    & div {
        justify-self: flex-end
    }


    @media screen and (max-width: 810px){
        flex-direction: column;

        & div {
            margin-bottom: 1.05em;
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
    font-size: 20px;

    & a:first-of-type {
        margin-left: 1rem;
    }

`;

const BackArrow = styled(Link)`
    position: relative;
    text-align: center;
    padding: 12px;
    height: 10px;
    width: 50px;
    transform: rotate(90deg);
    margin-top: 1.05em;
    margin-bottom: 1.05em;
    font-size: 4rem;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 51%;
      background: #A583B4;
      transform: skew(0deg, 50deg);
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 50%;
      background: #A583B4;
      transform: skew(0deg, -50deg);
    }
`

export default ({title}) => {
    return (
        <NavbarStyled>
            {!title && <BackArrow to="/articles"></BackArrow>}
            {title && <h1>{title}</h1>}
            <div>
                <NavbarLink to="/">About</NavbarLink>
                <NavbarLink to="/articles">Article</NavbarLink>
            </div>
        </NavbarStyled>
    )
};