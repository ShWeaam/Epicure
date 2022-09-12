import React from 'react'
import { HamburgerContainer, HamburgerIcon } from './HeaderMenuStyle'
import hamburgerIcon from "assets/navBar/hamburger.svg"
import { useDispatch } from 'react-redux'
import { setMenuModalIsOpen } from '../headerModals/menuModal/menuModalSlicer';

export default function HeaderMenu() {
  
  const dispatch=useDispatch();

  return (
    <HamburgerContainer>
      <HamburgerIcon src={hamburgerIcon} onClick={()=> dispatch(setMenuModalIsOpen(true))} />
    </HamburgerContainer>
  )
}
