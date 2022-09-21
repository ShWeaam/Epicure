import { ABOUT_US_TEXT, ABOUT_US_TEXT_EXTRA, ABOUT_US_TITLE } from 'constants/constants'
import React from 'react'
import { Container, Paragraph, Title } from './aboutUsStyle'

export default function AboutUs() {

    const text = ABOUT_US_TEXT;
    const textSecondary = ABOUT_US_TEXT_EXTRA;

    return (
        <Container>
            <Title>
                {ABOUT_US_TITLE.toUpperCase()}
            </Title>
            <Paragraph>
                {text}
            </Paragraph>
            <Paragraph>
                {textSecondary}
            </Paragraph>
        </Container>

    )
}
