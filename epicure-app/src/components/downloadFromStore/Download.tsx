import React from 'react'
import { Container, Frame, Icon, IconContainer, TextFrame } from './downloadStyle'
import googlePlay from "assets/android.svg"
import apple from "assets/apple.svg"

export default function Download() {

  return (
    <Container>
      <Frame>
        <IconContainer>
          <Icon src={googlePlay} />
        </IconContainer>
        <TextFrame>
          Get it on <span> Google Play</span>
        </TextFrame>
      </Frame>
      <Frame>
        <IconContainer>
          <Icon src={apple} />
        </IconContainer>
        <TextFrame>
          Download on the <span> App Store</span>
        </TextFrame>
      </Frame>
    </Container>
  )
}
