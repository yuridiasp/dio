import styled, { css } from "styled-components"

export const ButtonContainer = styled.button`
    background-color: #565656;
    border-radius: 22px;
    position: relative;
    width: 100%;
    border: none;

    font-family: "Open Sans";
    color: white;
    padding: 2px 12px;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ variant }) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;

        background-color: #E4185D;

        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: "";
            position: absolute;
            border: 1px solid #E4185D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`