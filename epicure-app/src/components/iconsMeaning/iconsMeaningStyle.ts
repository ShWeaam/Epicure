import { DESKTOP_TEXT_SIZE, MOBILE_TEXT_SIZE, MOBILE_TO_DESKTOP_THRESHOLD } from "constants/styleConsts"
import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 5%;
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        height: 270px;
    }
`

export const ContainerHeader = styled.h2`
    font-size: ${MOBILE_TEXT_SIZE.h2};
    line-height: 200%;
    
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        letter-spacing: 5px;
        font-size: ${DESKTOP_TEXT_SIZE.h2};
    }
`

export const IconsContainer = styled.div`
    width:50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    row-gap: 60px;
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        flex-direction: row;
    }
`

export const IconCard = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        width:30%;
        margin-bottom: 0;
    }
`

export const Icon = styled.img`
    width: 45%;
    object-fit: fill;
    margin-bottom: 10%;
`

export const IconTitle = styled.div`
    font-size: ${MOBILE_TEXT_SIZE.foodCategory};

    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        font-size: ${DESKTOP_TEXT_SIZE.foodCategory};
    }
`


