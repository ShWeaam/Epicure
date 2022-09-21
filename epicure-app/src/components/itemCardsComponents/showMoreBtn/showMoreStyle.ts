import { DESKTOP_TEXT_SIZE, MOBILE_TEXT_SIZE, MOBILE_TO_DESKTOP_THRESHOLD, MOBILE_WIDTH } from "constants/styleConsts";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FullWidthContainer = styled.div`
    display:flex;
    justify-content: flex-start;
    width:${MOBILE_WIDTH};
    box-sizing: border-box;
    align-items: center;
    margin-bottom: 35px;
    letter-spacing: 2px;
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        justify-content: flex-end;
        width:90%;
        margin: auto;
        margin-bottom: 50px;
    }
`

export const CustomLink = styled(Link)`
    display: flex;
    text-decoration: none;
    color: inherit;
    padding: 0;
    font-size: ${MOBILE_TEXT_SIZE.body};
    font-weight: normal;
    gap:7px;

    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        font-size: ${DESKTOP_TEXT_SIZE.body};
        gap:10px;
    }
`

export const IconContainer = styled.div`
    display: flex;
    max-width: 22px;
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        max-width: 22px;
        align-items: center;

    }
`

export const Icon = styled.img`
    width: 100%;
    object-fit: fill;
`