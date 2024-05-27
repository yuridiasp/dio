import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 60px;
    
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        flex-direction: column-reverse;
        align-items: center;
        gap: 50px;
        margin-bottom: 50px
    }
`

export const Title = styled.h3`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;
    color: #FFFFFF;
`

export const TitleHighlight = styled.h3`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;
    color: #FFFFFF70;
`

export const Column = styled.div`
    flex: ${({flex}) => flex};
    padding-right: 24px;
`