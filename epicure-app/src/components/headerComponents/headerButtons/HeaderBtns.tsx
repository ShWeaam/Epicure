import React from 'react'
import { BagIcon, BagIconContainer, BtnsContainer, ProfileIcon, ProfileIconContainer, SearchIcon, SearchIconContainer } from './HeaderBtnsStyle'
import profileIcon from 'assets/navBar/profile.svg'
import searchIcon from 'assets/navBar/search.svg'
import bagIcon from 'assets/navBar/bag.svg'
import SetWindowSize from 'helpers/setWindowSize'

export default function HeaderBtns() {
    const windowSize = SetWindowSize();

    return (
        <BtnsContainer windowSize={windowSize}>
            <SearchIconContainer>
                {windowSize > 300 && <SearchIcon src={searchIcon} />}
            </SearchIconContainer>
            <ProfileIconContainer>
                <ProfileIcon src={profileIcon} />
            </ProfileIconContainer>
            <BagIconContainer>
                <BagIcon src={bagIcon} />
            </BagIconContainer>
        </BtnsContainer>
    )
}
