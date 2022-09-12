import styled from "styled-components";
import mainHeroBG from "assets/homePage/mainHeroBG.svg"
import { DESKTOP_TEXT_SIZE, MOBILE_TEXT_SIZE, MOBILE_TO_DESKTOP_THRESHOLD, MOBILE_WIDTH } from "constants/styleConsts";


export const HeroContainer = styled.div`
    background-image: url(${mainHeroBG});
    background-size: cover;
    background-repeat: no-repeat;
    width: 99vw;
    height:max(min(48.33vw,77.3vh),min(72.8vw,33.6vh));
    display: flex;
    align-self:center;
    margin-bottom:2% ;
`
export const TransparentContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.88);
    margin:auto;
    width:min(${MOBILE_WIDTH},500px);
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;

    @media (min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        width:clamp(500px,54.45%,800px);
    }
`

export const HeaderFrame = styled.div`
    width:310px;
    padding:0 10px 0 10px;
    display:flex;

    @media (min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        width:420px;
    }

    @media (max-width: 370px){
        width:230px;
    }
`

export const MainHeader = styled.h1`
    font-size: ${ MOBILE_TEXT_SIZE.h1};
    line-height:150%;
    text-align: justify;
    letter-spacing: 1.5px;
    text-justify: inter-word;
    text-align-last: justify;

    @media (min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        font-size: ${DESKTOP_TEXT_SIZE.h1};
        letter-spacing: 2.5px;
    }

    @media (max-width: 370px){
        font-size: 18px;
        letter-spacing: 1.5px;
        line-height:170%;
    }

`