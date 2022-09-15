import { DESKTOP_TEXT_SIZE, DESKTOP_WIDTH, MOBILE_TEXT_SIZE, MOBILE_TO_DESKTOP_THRESHOLD, MOBILE_WIDTH } from "constants/styleConsts";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width:${MOBILE_WIDTH};
    box-sizing: border-box;

    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        max-width:${DESKTOP_WIDTH};
    }
`

export const ContainerTitle = styled.h2`
    font-size:${MOBILE_TEXT_SIZE.h2};
    display: flex;
    align-self: flex-start;
    justify-content: center;
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        align-self: center;
        font-size:${DESKTOP_TEXT_SIZE.h2};
        width: 100%;

    }
`