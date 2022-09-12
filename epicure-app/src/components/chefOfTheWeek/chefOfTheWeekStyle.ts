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
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

export const ContainerTitle = styled.h2`
    font-size:${MOBILE_TEXT_SIZE.h2};
    display: flex;
    align-self: flex-start;
    justify-content: center;
    line-height: 200%;
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        align-self: center;
        font-size:${DESKTOP_TEXT_SIZE.h2};
        width: 100%;
    }
`

export const TextContainer = styled.div`
    width: 100%;
    font-size: ${MOBILE_TEXT_SIZE.chefOfTheWeekText};
    text-align: justify;
    text-justify: inter-word;
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        width: 55%;
        font-size: ${DESKTOP_TEXT_SIZE.chefOfTheWeekText};
        }
`

export const Text = styled.p`
line-height: 150%;
letter-spacing: 1.3px;
`

export const ChefResturants = styled.div`
margin-top: 5%;

`