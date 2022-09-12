import React from 'react'
import { Icon, IconDiv, SearchBox, SearchInput } from './searchBarStyle'
import searchIcon from 'assets/navBar/search.svg'

export default function SearchBar() {

    return (
        <SearchBox>
            <IconDiv>
                <Icon src={searchIcon} />
            </IconDiv>
            <SearchInput type="text" placeholder="Search for resturant, cuisine, chef" />
        </SearchBox>

    )
}
