import { MOBILE_TO_DESKTOP_THRESHOLD } from "constants/styleConsts";
import styled from "styled-components";

export const Container = styled.div`
    margin:auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 35px;

    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        width: 90%;
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

export const FullWidthContainer = styled.div`
    width: 100%;

`
