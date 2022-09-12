import { ABOUT_US_TITLE } from 'constants/constants'
import React from 'react'
import { Container, Paragraph, Title } from './aboutUsStyle'

export default function AboutUs() {

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum eleifend volutpat. Vestibulum luctus maximus ex, eu fringilla nulla imperdiet et. Duis vitae lectus vitae elit aliquam iaculis non quis diam. Curabitur viverra pretium arcu vel sodales. Sed nec rhoncus neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam id mi sodales, tempor est eu, eleifend arcu. Phasellus vel tellus in ex ultrices lacinia nec et dolor. Suspendisse mollis lectus sed justo eleifend semper. Mauris faucibus sit amet orci sed gravida. Aliquam ultrices rhoncus nibh in facilisis."

    return (
        <Container>
            <Title>
                {ABOUT_US_TITLE.toUpperCase()}
            </Title>
            <Paragraph>
                {text}
            </Paragraph>
        </Container>

    )
}
