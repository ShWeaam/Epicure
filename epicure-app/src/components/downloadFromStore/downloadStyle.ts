import { MOBILE_TEXT_SIZE, MOBILE_TO_DESKTOP_THRESHOLD } from "constants/styleConsts";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: ${MOBILE_TEXT_SIZE.label};
    gap:15px;

    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        flex-direction: row;
        justify-content: start;
        flex-direction: row-reverse;
    }
`

export const Frame = styled.div`
    border-radius:10px;
    border:1px solid black;
    width:60%;
    display: flex;
    justify-content: space-around;
    height: 52px;
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        width: 17%;
    }
`
export const IconContainer = styled.div`
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Icon = styled.img`
    width: 100%;
    object-fit: fill;
`

export const TextFrame = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-weight: bolder;
& span{
    font-size: ${MOBILE_TEXT_SIZE.h2};
}
`