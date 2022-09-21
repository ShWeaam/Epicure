import { DESKTOP_WIDTH, MOBILE_TO_DESKTOP_THRESHOLD, MOBILE_WIDTH } from "constants/styleConsts";
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
    width: 95%;
    display: flex;
    order:1;

    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        width: 65%;
        order:0;
    }

`
