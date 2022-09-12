import { ABOUT_US_TITLE } from 'constants/constants'
import React from 'react'
import { Container, Paragraph, Title } from './aboutUsStyle'

export default function AboutUs() {

    const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid accusantium quisquam temporibus dolor laboriosam nesciunt quaerat magni inventore laudantium blanditiis natus illum culpa minus excepturi accusamus atque maiores, rerum nobis?"

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
