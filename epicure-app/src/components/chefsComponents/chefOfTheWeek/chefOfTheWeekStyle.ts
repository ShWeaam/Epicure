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
        max-width:calc(${DESKTOP_WIDTH}*0.9);
        flex-direction: row;
        flex-wrap: wrap;
        margin: auto;
    }
`

export const ContainerTitle = styled.h2`
    font-size:${MOBILE_TEXT_SIZE.h2};
    display: flex;
    align-self: flex-start;
    justify-content: center;
    line-height: 200%;
    font-weight: lighter;
    letter-spacing: 1.25px;
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        align-self: center;
        font-size:${DESKTOP_TEXT_SIZE.h2};
        width: 100%;
    }
`

export const TextContainer = styled.div`
    width: 100%;
    text-align: justify;
    text-justify: inter-word;
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        width: 55%;
        font-size: ${DESKTOP_TEXT_SIZE.chefOfTheWeekText};
        }
`

export const Text = styled.p`
    font-size: ${MOBILE_TEXT_SIZE.chefOfTheWeekText};
    line-height: 150%;
    letter-spacing: 1.25px;
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        font-size: ${DESKTOP_TEXT_SIZE.chefOfTheWeekText};
        }
`

export const ChefResturants = styled.div`
margin-top: 5%;
width: 100%;
display: flex;
`