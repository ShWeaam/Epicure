import AboutUs from 'components/about/AboutUs'
import Download from 'components/downloadFrom/Download'
import Logo from 'components/logo/Logo'
import React from 'react'
import { Container, SubContainer } from './AboutUsHomeSectionStyle'

export default function AboutUsHomeSection() {
  return (
    <Container>
      <SubContainer>
        <AboutUs />
      </SubContainer>
      <Logo />
      <Download />
    </Container>)
}
