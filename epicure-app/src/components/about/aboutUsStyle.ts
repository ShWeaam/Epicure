import { DESKTOP_TEXT_SIZE, MOBILE_TEXT_SIZE, MOBILE_TO_DESKTOP_THRESHOLD } from "constants/styleConsts";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

export const Title = styled.h2`
font-weight: lighter;
    font-size: ${MOBILE_TEXT_SIZE.h2};
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        font-size: ${DESKTOP_TEXT_SIZE.h2};
    }
`

export const Paragraph = styled.p`
    font-size: ${MOBILE_TEXT_SIZE.aboutUs};
    letter-spacing: 2.14px;
    line-height: 155%;
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        font-size: ${DESKTOP_TEXT_SIZE.aboutUs};
        line-height: 150%;
        width: 75%;
    }
`