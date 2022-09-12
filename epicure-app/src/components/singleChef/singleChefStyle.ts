import { DESKTOP_TEXT_SIZE, MOBILE_TEXT_SIZE, MOBILE_TO_DESKTOP_THRESHOLD } from "constants/styleConsts";
import styled from "styled-components";

export const SingleChefContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    position: relative;

    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        width: 30%;
    }
`
export const ChefImage = styled.img`
    width: 100%;
    object-fit: fill;
`

export const NameContainer = styled.div`
    width: 100%;
    background-color: rgb(255,255,255,0.8);
    display: flex;
    justify-content: center;
    align-items: center; 
    position: absolute;
    bottom: 0;
    font-weight: 900;
    height: 50px;
    letter-spacing: 3px;
    font-size: ${MOBILE_TEXT_SIZE.h3};
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        font-size: ${DESKTOP_TEXT_SIZE.h3};
        height: 80px;
    
    }
`
