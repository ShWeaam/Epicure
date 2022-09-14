import React from 'react'
import bigLogo from "assets/logo/logoBig.svg"
import smallLogo from "assets/logo/logoSmall.svg"
import { Container, LogoIcon } from './logoStyle'
import SetWindowSize from 'helpers/setWindowSize'
import { MOBILE_TO_DESKTOP_THRESHOLD } from 'constants/styleConsts';

export default function Logo() {

    const windowSize = SetWindowSize();
    return (
        <Container>
            <LogoIcon src={windowSize < MOBILE_TO_DESKTOP_THRESHOLD ? smallLogo : bigLogo} />
        </Container>
    )
}
