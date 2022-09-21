import { DESKTOP_LEFT_MARGIN, MOBILE_LEFT_MARGIN, MOBILE_TO_DESKTOP_THRESHOLD } from "constants/styleConsts";
import styled from "styled-components";

export const ColorBG = styled.div`
    background-color: #FAFAFA;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-left: -${MOBILE_LEFT_MARGIN};
    margin-top: 7%;
    margin-bottom: 9%;    
    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        margin-left: -${DESKTOP_LEFT_MARGIN};
        margin-bottom: 5%;     
        margin-top: 5%;
    }
`
