import { MOBILE_TO_DESKTOP_THRESHOLD } from "constants/styleConsts";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    margin-bottom:1%;
    margin-top:1%;
    justify-content:space-between;
    align-items:center;
`
export const HeaderSubContainerLeft = styled.div<{ windowSize: any }>`
    display: flex;
    justify-content:space-between;
    align-items:center;
    width:55%;

    @media (min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px) {
        width:inherit;
    }
`
export const HeaderSubContainerRight = styled.div`
    display: flex;
    max-width:45%;
    justify-content:space-between;
    align-items:center;
`