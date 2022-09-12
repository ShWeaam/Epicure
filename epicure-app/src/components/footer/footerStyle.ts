import { MOBILE_TEXT_SIZE, MOBILE_TO_DESKTOP_THRESHOLD } from "constants/styleConsts"
import styled from "styled-components"

export const ButtonsContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:start;
    margin-top:40px;
    flex-direction:column;
    margin-bottom: 5%;
    @media (min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        width:clamp(350px,36%,450px);
        margin:auto;
        margin-top:40px;
        flex-direction:row;
        margin-bottom: 5%;
    }
`
export const ButtonWithoutFrame = styled.button`
    line-height:200%;
    border:none;
    background-color:white;
    font-size:${MOBILE_TEXT_SIZE.footerLinks};
    font-family:inherit;
    font-weight:inherit;
    padding: 0;
`
