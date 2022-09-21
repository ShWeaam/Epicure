import { DESKTOP_TEXT_SIZE, FONT, MOBILE_LEFT_MARGIN, MOBILE_TEXT_SIZE, MOBILE_TO_DESKTOP_THRESHOLD } from "constants/styleConsts";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinksContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    line-height:200%;
    font-size:${MOBILE_TEXT_SIZE.navLink};
    font-family:${FONT};
    font-weight:200;
    /* margin-left:0; */
    @media (min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px) {
        width:177px;
        font-size:${DESKTOP_TEXT_SIZE.navLink};
        margin-left:30px;
        flex-direction: row;
      }
`
export const LinkButton = styled.div`
    display:flex;
`

export const CustomNavLink = styled(NavLink) <{ state: any }>`
    border-Bottom: ${props => props.state ? '3px solid RGB(222,146,0,90)' : 'none'};
    text-Decoration: none;
    color: inherit;
`
