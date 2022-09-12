import { DESKTOP_LEFT_MARGIN, DESKTOP_WIDTH, MOBILE_LEFT_MARGIN, MOBILE_TO_DESKTOP_THRESHOLD, MOBILE_WIDTH } from "constants/styleConsts";
import styled from "styled-components";

export const Container = styled.div`
    margin:auto;
    width: ${MOBILE_WIDTH};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 35px;

    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        width: calc(${DESKTOP_WIDTH} * 0.9);
    }
    
`

export const SubContainer = styled.div`
    width: 80%;
    display: flex;
    order:1;

    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        order:0;
    }

`

export const ColorBG = styled.div`
    background-color: #FAFAFA;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 99vw;
    margin-left: -${MOBILE_LEFT_MARGIN};
    margin-top: 7%;
    margin-bottom: 9%;    
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        margin-left: -${DESKTOP_LEFT_MARGIN};
    }
`
