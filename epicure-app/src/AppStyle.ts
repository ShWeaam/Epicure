import { BG_COLOR, DESKTOP_WIDTH, FONT, FONT_COLOR, FONT_WEIGHT, LETTER_SPACING, MOBILE_TEXT_SIZE, MOBILE_TO_DESKTOP_THRESHOLD, MOBILE_WIDTH } from "constants/styleConsts";
import styled from "styled-components";

export const AppDiv = styled.div<{ windowSize: number }>`
    width:${props => props.windowSize < MOBILE_TO_DESKTOP_THRESHOLD ? MOBILE_WIDTH : DESKTOP_WIDTH};
    font-family: ${FONT};
    font-size: ${MOBILE_TEXT_SIZE.body};
    color: ${FONT_COLOR};
    background-color: ${BG_COLOR};
    /* background-color:red; */
    font-weight: ${FONT_WEIGHT};
    letter-spacing: ${LETTER_SPACING};
    margin:auto;
    box-sizing: border-box;
    display:flex;
    flex-direction:column;
`