import styled from "styled-components";
import mainHeroBG from "assets/homePage/mainHeroBG.svg"
import { DESKTOP_TEXT_SIZE, MOBILE_TEXT_SIZE, MOBILE_TO_DESKTOP_THRESHOLD, MOBILE_WIDTH } from "constants/styleConsts";


export const HeroContainer = styled.div`
    background-image: url(${mainHeroBG});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height:max(min(48.33vw,77.3vh),min(72.8vw,33.6vh));
    display: flex;
    align-self:center;
    margin-bottom:2% ;
`
export const TransparentContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.88);
    margin:auto;
    width:min(${MOBILE_WIDTH},400px);
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;

    @media (min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        width:clamp(500px,54.45%,800px);
    }
`

export const HeaderFrame = styled.div`
    width:clamp(calc(${MOBILE_WIDTH}*0.55),96%,350px);
    display:flex;
    align-items: center;
    justify-content: center;
    @media (min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        width:410px;
    }

    /* @media (max-width: 360px){
        width:clamp(calc(${MOBILE_WIDTH}*0.55),90%,350px);
    } */

    @media (max-width: 270px){
        width:98%;
    }
    `

export const MainHeader = styled.h1`
    font-size: 1.5rem;
    line-height:134%;
    text-align: justify;
    font-weight: 200;
    letter-spacing: 1.5px;
    text-justify: inter-word;
    text-align-last: justify;

    @media (min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        font-size: ${DESKTOP_TEXT_SIZE.h1};
        letter-spacing: 1.97px;
    }

    /* @media (max-width: 370px){
        letter-spacing: 1px;
        line-height:140%;
    } */

`