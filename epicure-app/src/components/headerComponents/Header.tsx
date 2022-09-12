import { MOBILE_TO_DESKTOP_THRESHOLD } from 'constants/styleConsts'
import SetWindowSize from 'helpers/setWindowSize'
import HeaderBtns from './headerButtons/HeaderBtns'
import HeaderLinks from './headerLinks/HeaderLinks'
import HeaderLogo from './headerLogo/HeaderLogo'
import HeaderMenu from './headerMenu/HeaderMenu'
import MenuModal from './headerModals/menuModal/MenuModal'
import { HeaderContainer, HeaderSubContainerLeft, HeaderSubContainerRight } from './HeaderStyle'

export default function Header() {
    const windowSize = SetWindowSize();
    return (
        <>
            <MenuModal />
            <HeaderContainer>
                <HeaderSubContainerLeft windowSize={windowSize}>
                    {windowSize < MOBILE_TO_DESKTOP_THRESHOLD && <HeaderMenu />}
                    <HeaderLogo />
                    {windowSize >= MOBILE_TO_DESKTOP_THRESHOLD && <HeaderLinks />}
                </HeaderSubContainerLeft>
                <HeaderSubContainerRight>
                    <HeaderBtns />
                </HeaderSubContainerRight>
            </HeaderContainer>
        </>
    )
}
