import React from 'react'

export default function checkLegalPropsAndInRange(cardsToShow: any, index: number) {
    return ((!isNaN(+cardsToShow) && index < cardsToShow) || cardsToShow === "all" || cardsToShow === undefined)
}
