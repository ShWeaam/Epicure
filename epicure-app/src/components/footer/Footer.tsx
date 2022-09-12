import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonsContainer, ButtonWithoutFrame } from './footerStyle'

export default function Footer() {

    const navigate = useNavigate();

    return (
        <ButtonsContainer>
            <ButtonWithoutFrame onClick={() => navigate('/contactUs')}>Contact Us</ButtonWithoutFrame>
            <ButtonWithoutFrame onClick={() => navigate('/termsOfUse')}>Terms of Use</ButtonWithoutFrame>
            <ButtonWithoutFrame onClick={() => navigate('/privacyPolicy')}>Privacy Policy</ButtonWithoutFrame>
        </ButtonsContainer>
    )
}
