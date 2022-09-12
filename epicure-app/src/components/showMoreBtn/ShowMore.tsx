import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter'
import React from 'react'
import showMoreArrow from "assets/homePage/moreArrow.svg"

import { CustomLink, FullWidthContainer, Icon, IconContainer } from './showMoreStyle'

interface Props {
    linkTo: string;
    linkText?: string;
}

export default function ShowMore(props: Props) {

    return (
        <FullWidthContainer>
            <CustomLink to={props.linkTo}> {props.linkText ?? "All " + capitalizeFirstLetter(props.linkTo)}
                <IconContainer>
                    <Icon src={showMoreArrow} />
                </IconContainer>
            </CustomLink>
        </FullWidthContainer>
    )
}
