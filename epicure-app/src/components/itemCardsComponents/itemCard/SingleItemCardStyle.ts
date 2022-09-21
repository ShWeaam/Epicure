import { DESKTOP_TEXT_SIZE, ITEM_CARD_BG_COLOR, MOBILE_TEXT_SIZE, MOBILE_TO_DESKTOP_THRESHOLD } from "constants/styleConsts";
import styled from "styled-components";

export const Item = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:100%;
    align-items:center;
    margin-bottom: 5%;
    background-color: ${ITEM_CARD_BG_COLOR};

    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        width:30%;
        margin-bottom: 1%;
    }
`

export const ItemImgContainer = styled.div`
    width: 100%;
`

export const ItemImg = styled.img`
    width: 100%;
    object-fit: fill;

`

export const ItemDescription = styled.div < { isResturant?: boolean, isChefOfTheWeek?: boolean }> `
    display:flex;
    width: 100%;
    margin-left: 7%;
    flex-direction:column;
    align-items:start;
    justify-content: space-around;
    min-height: ${(props) => (props.isResturant || props.isChefOfTheWeek) ? 75 : 230}px;

    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        min-height: ${(props) => (props.isResturant || props.isChefOfTheWeek) ? 75 : 350}px;
        align-items:center;
        margin-left: 0;
    }
`

export const ItemName = styled.h3`
    line-height: 200%;
    padding: 0px;
    margin: 0px;
    font-weight: normal;
    font-size:${MOBILE_TEXT_SIZE.h3};
    letter-spacing: 2.67px;
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        font-size:${DESKTOP_TEXT_SIZE.h3};
    }
`

export const ItemDetails = styled.div`
    font-size:${MOBILE_TEXT_SIZE.body};
    display:flex;
    justify-content: center;
    margin-bottom: 5%;
    align-items: center;
    max-width:85%;
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        font-size:${DESKTOP_TEXT_SIZE.body};
        max-width: 75%;
    }
`

export const ItemIconsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 5%;

    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        align-items: center;
    }
`

export const ItemIcon = styled.img`

    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        width: 18%;
    }
`

export const ItemPrice = styled.div`
    width: 100%; 
    margin-top: 5%;
    font-size:${MOBILE_TEXT_SIZE.body};
    justify-content: flex-start;
    display: flex;

    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        font-size:${DESKTOP_TEXT_SIZE.body};
        justify-content: center;
        align-items: center;

    }
`