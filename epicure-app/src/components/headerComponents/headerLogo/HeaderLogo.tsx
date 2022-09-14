import { AppName, LogoContainer, LogoImg, LogoImgContainer } from './HeaderLogoStyle'
import navBarLogo from "assets/navBar/logo.svg"
import { useNavigate } from 'react-router-dom'
import { APP_NAME, APP_URLS } from 'constants/constants';
import SetWindowSize from 'helpers/setWindowSize';
import { MOBILE_TO_DESKTOP_THRESHOLD } from 'constants/styleConsts';

export default function HeaderLogo() {

  const navigate = useNavigate();
  const windowSize = SetWindowSize();

  const NavigateHome = () => {
    navigate(APP_URLS.HOME);
  };


  return (
    <LogoContainer>
      <LogoImgContainer>
        <LogoImg src={navBarLogo} onClick={NavigateHome} />
      </LogoImgContainer>
      {windowSize >= MOBILE_TO_DESKTOP_THRESHOLD && <AppName onClick={NavigateHome}>
        {APP_NAME.toUpperCase()}
      </AppName>}
    </LogoContainer>
  )
}
