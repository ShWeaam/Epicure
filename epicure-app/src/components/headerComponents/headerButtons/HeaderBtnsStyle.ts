import { MOBILE_TO_DESKTOP_THRESHOLD } from "constants/styleConsts";
import styled from "styled-components";

export const BtnsContainer = styled.div<{ windowSize: any }>`
    display: flex;
    justify-content: space-between;
    width: ${props => props.windowSize < MOBILE_TO_DESKTOP_THRESHOLD ? "100px" : "120px"};
`
export const SearchIconContainer = styled.div`
`

export const SearchIcon = styled.img`
`

export const ProfileIconContainer = styled.div`
`

export const ProfileIcon = styled.img`
`

export const BagIconContainer = styled.div`
`

export const BagIcon = styled.img`
`
