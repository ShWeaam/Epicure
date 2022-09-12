import { DESKTOP_INNER_WIDTH, DESKTOP_WIDTH, MOBILE_TO_DESKTOP_THRESHOLD } from "constants/styleConsts";
import styled from "styled-components";

export const ItemsContainer = styled.div<{ directionRow?: boolean }>`
    display:flex;
    width: 100%;
    align-items: flex-start;
    flex-direction: ${props => props.directionRow === true ? "row" : "column"};

    @media(min-width: ${MOBILE_TO_DESKTOP_THRESHOLD}px){
        flex-direction: row;
        flex-wrap: wrap;
        width:calc(${DESKTOP_WIDTH}*${DESKTOP_INNER_WIDTH});
        justify-content: space-between;
    }
`