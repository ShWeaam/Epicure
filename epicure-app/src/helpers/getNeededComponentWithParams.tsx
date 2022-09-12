import HomePage from 'components/homePage/HomePage';
import { HOME_PATH } from 'constants/constants';
import { MOBILE_TO_DESKTOP_THRESHOLD } from 'constants/styleConsts';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SetWindowSize from './setWindowSize';
import ItemsList from 'components/itemsCards/ItemsCards';
import ItemsListWithSlider from 'components/itemsCards/ItemsCardsWithSlider';


export default function getNeededComponentWithParams(locationRecieved: any) {
    const windowSize = SetWindowSize();
    let ComponentToShow;
    let cardsToShow: number | string = "";
    let location = locationRecieved;

    if (location.pathname !== HOME_PATH) {
        ComponentToShow = ItemsList;
        cardsToShow = "all";
    }
    else if (windowSize < MOBILE_TO_DESKTOP_THRESHOLD) {
        ComponentToShow = ItemsListWithSlider;
        cardsToShow = "all";
    }
    else {
        ComponentToShow = ItemsList;
        cardsToShow = 3;
    }

    return { ComponentToShow, cardsToShow };
}
