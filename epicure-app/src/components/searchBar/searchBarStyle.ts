import { DESKTOP_TEXT_SIZE, MOBILE_TEXT_SIZE, MOBILE_TO_DESKTOP_THRESHOLD } from "constants/styleConsts";
import styled from "styled-components";

export const SearchBox = styled.div`
    display: flex;
	align-items: center;
	margin: auto;
    width:clamp(295px,75%,400px);
    margin-bottom: 5%;

    @media(min-width:${MOBILE_TO_DESKTOP_THRESHOLD}px){
    width:clamp(420px,75%,500px);
    }

    `

export const IconDiv = styled.div`
    display:flex;
    position: absolute;
    padding-left:2%;

`

export const Icon = styled.img`
    width:100%;
`

export const SearchInput = styled.input`
    display: flex;
    justify-content:center;
    line-height: 200%;
    outline: none;
    font-size:${MOBILE_TEXT_SIZE.input};
	background-color: transparent;
	width: 100%;
	padding-left: 12%;
    border-radius:4px;
    &::placeholder{
        color:#000000;
    }
`

