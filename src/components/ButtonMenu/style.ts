import styled from "styled-components";

export const ButtonMenuContainer = styled.button`
    width: 30px;
    height: 20px;
    background: none;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    span {
        height: 3px;
        width: 100%;
        border-radius: 40px;
        background-color: #FFFFFF;
        display: block;
    }

    @media screen and (min-width: 800px) {
        display: none;
    }
`