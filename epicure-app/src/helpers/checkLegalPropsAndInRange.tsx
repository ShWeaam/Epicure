import { CARDS_TO_SHOW } from 'constants/constants'
import React from 'react'

export default function checkLegalPropsAndInRange(cardsToShow: any, index: number) {
    return ((!isNaN(+cardsToShow) && index < cardsToShow) || cardsToShow === CARDS_TO_SHOW.all || cardsToShow === undefined)
}
