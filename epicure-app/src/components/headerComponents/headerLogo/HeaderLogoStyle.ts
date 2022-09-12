import { DESKTOP_TEXT_SIZE, MOBILE_TO_DESKTOP_THRESHOLD } from "constants/styleConsts";
import styled from "styled-components";

export const LogoContainer = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;

    @media (min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px) {
        width:165px;
    }    

`
export const LogoImg = styled.img`
    &:hover{
        cursor: pointer;
    }
`
export const LogoImgContainer = styled.div`
`
export const AppName = styled.div`
    letter-spacing: 2px;
    font-size: ${DESKTOP_TEXT_SIZE.logo};
    &:hover{
        cursor: pointer;
    }
`