import { APP_URLS, CARDS_TO_SHOW } from 'constants/constants';
import { MOBILE_TO_DESKTOP_THRESHOLD } from 'constants/styleConsts';
import SetWindowSize from './setWindowSize';
import ItemsList from 'components/itemCardsComponents/itemsCards/ItemsCards';
import ItemsListWithSlider from 'components/itemCardsComponents/itemsCards/ItemsCardsWithSlider';


export default function getNeededComponentWithParams(recievedLocation: any) {
    const windowSize = SetWindowSize();
    let ComponentToShow;
    let cardsToShow: number | string = CARDS_TO_SHOW.all;

    if (recievedLocation.pathname !== APP_URLS.HOME)
        ComponentToShow = ItemsList;
    else if (windowSize < MOBILE_TO_DESKTOP_THRESHOLD)
        ComponentToShow = ItemsListWithSlider;
    else {
        ComponentToShow = ItemsList;
        cardsToShow = CARDS_TO_SHOW.three;
    }

    return { ComponentToShow, cardsToShow };
}
