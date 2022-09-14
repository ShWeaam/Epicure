import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonsContainer, ButtonWithoutFrame, CustomLink } from './footerStyle'

export default function Footer() {

    // const navigate = useNavigate();

    return (
        <ButtonsContainer>
            <CustomLink to={'/contactUs'}>Contact Us</CustomLink>
            <CustomLink to={'/termsOfUse'}>Terms of Use</CustomLink>
            <CustomLink to={'/privacyPolicy'}>Privacy Policy</CustomLink>
            {/* <ButtonWithoutFrame onClick={() => navigate('/privacyPolicy')}>Privacy Policy</ButtonWithoutFrame> */}
        </ButtonsContainer>
    )
}
