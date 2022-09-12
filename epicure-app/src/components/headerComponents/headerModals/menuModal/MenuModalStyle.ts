import { MOBILE_LEFT_MARGIN, MOBILE_TEXT_SIZE } from "constants/styleConsts";
import ReactModal from "react-modal";
import styled from "styled-components";

export const ModalBackground = styled(ReactModal)`
    background-color:white;
    width:100vw;
    position: absolute;
    left:0px;
    padding-top:1%;
    font-family:'Helvetica Neue';
    font-weight:bold;
    font-size:${MOBILE_TEXT_SIZE.navLink};
    outline:none;
    `

export const ModalItemsContainer = styled.div`
    display:flex;
    margin-left:${MOBILE_LEFT_MARGIN};
    flex-direction:column;
    justify-content: space-around;
    padding-top:2%;
`

export const ModalHeader = styled.div`
    display:flex;
    align-items:center;
    margin-bottom: 20px;
`

export const Close = styled.div`
    display:flex;
    align-items:center;
`

export const XIcon = styled.img`
    max-width:100%;
`

