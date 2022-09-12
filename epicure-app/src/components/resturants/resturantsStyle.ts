import { DESKTOP_WIDTH, MOBILE_TO_DESKTOP_THRESHOLD, MOBILE_WIDTH } from "constants/styleConsts";
import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    max-width:${MOBILE_WIDTH};
    box-sizing: border-box;

    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        max-width:${DESKTOP_WIDTH};
    }
`