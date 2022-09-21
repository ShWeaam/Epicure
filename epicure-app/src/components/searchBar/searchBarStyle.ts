import { DESKTOP_TEXT_SIZE, DESKTOP_WIDTH, MOBILE_TEXT_SIZE, MOBILE_TO_DESKTOP_THRESHOLD, MOBILE_WIDTH } from "constants/styleConsts";
import styled from "styled-components";

export const SearchBox = styled.div`
    display: flex;
	align-items: center;
	margin: auto;
    width:clamp(calc(${MOBILE_WIDTH}*0.55),95%,350px);
    margin-bottom: 5%;

    @media(min-width:${MOBILE_TO_DESKTOP_THRESHOLD}px){
    width:clamp(420px,75%,500px);
    }
`

export const IconDiv = styled.div`
    display:flex;
    position: absolute;
    padding-left:3%;
    width: clamp(20px,7%,30px);
    
    @media (min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        padding-left:1%;
        width: clamp(30px,2%,40px);
    }
`

export const Icon = styled.img`
    width:100%;
`

export const SearchInput = styled.input`
    display: flex;
    justify-content:center;
    line-height: 200%;
    border: 0.5px solid #000000;
    /* font-size:${MOBILE_TEXT_SIZE.searchBar}; */
    font-size:1.15em;
    font-weight: 200;
	background-color: transparent;
    font-family: 'HelveticaNeue';
    width: min(${MOBILE_WIDTH},300px);
	padding-left: 15%;
    border-radius:4px;
    &::placeholder{
        color:inherit;
    }

    @media (min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        font-size: ${DESKTOP_TEXT_SIZE.searchBar};
	    padding-left: 13.5%;
        letter-spacing: 1.3px;
        line-height: 150%;
        width: min(${DESKTOP_WIDTH},500px);
    }

    @media (max-width: 370px){
        padding-left: 12%;
    }
`

