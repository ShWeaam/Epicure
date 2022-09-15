import { DESKTOP_TEXT_SIZE, MOBILE_TEXT_SIZE, MOBILE_TO_DESKTOP_THRESHOLD, MOBILE_WIDTH } from "constants/styleConsts";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FullWidthContainer = styled.div`
    display:flex;
    justify-content: flex-end;
    width:${MOBILE_WIDTH};
    box-sizing: border-box;
    align-items: center;
    margin-bottom: 35px;
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
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
    gap:7px;

    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        font-size: ${DESKTOP_TEXT_SIZE.body};
        gap:10px;
    }
`

export const IconContainer = styled.div`
    max-width: 20px;
`

export const Icon = styled.img`
    width: 100%;
    object-fit: fill;
`