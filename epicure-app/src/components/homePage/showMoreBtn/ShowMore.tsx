import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter'
import React from 'react'
import showMoreArrow from "assets/homePage/moreArrow.svg"

import { CustomLink, FullWidthContainer, Icon, IconContainer } from './showMoreStyle'

interface Props {
    linkTo: string;
}

export default function ShowMore(props: Props) {

    return (
        <FullWidthContainer>
            <CustomLink to={props.linkTo}>All {capitalizeFirstLetter(props.linkTo)}
                <IconContainer>
                    <Icon src={showMoreArrow} />
                </IconContainer>
            </CustomLink>
        </FullWidthContainer>
    )
}
