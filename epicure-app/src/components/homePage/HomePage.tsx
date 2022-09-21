import SetWindowSize from 'helpers/setWindowSize'
import HeroHomePage from 'components/heroHomePage/HeroHomePage';
import { APP_URLS, REDUX_STATES, RESTURANTS_CONTAINER_TITLE, SIGNATURE_DISH_CONTAINER_TITLE } from 'constants/constants';
import ListOfItemCards from 'components/itemCardsComponents/listOfItemCards/ListOfItemCards';
import ShowMore from '../itemCardsComponents/showMoreBtn/ShowMore';
import IconsMeaning from 'components/iconsMeaning/IconsMeaning';
import { ColorBG } from './HomePageStyle';
import ChefOfTheWeek from 'components/chefsComponents/chefOfTheWeek/ChefOfTheWeek';
import AboutUsHomeSection from 'components/homePageAboutUsComponents/AboutUsHomeSection';


export default function HomePage() {
    return (
        <>
            <HeroHomePage />
            <ListOfItemCards title={RESTURANTS_CONTAINER_TITLE} requiredState={REDUX_STATES.RESTURANTS} />
            <ShowMore linkTo={APP_URLS.RESTURANTS} />
            <ListOfItemCards title={SIGNATURE_DISH_CONTAINER_TITLE} requiredState={REDUX_STATES.DISHES} />
            <ShowMore linkTo={APP_URLS.DISHES} />
            <ColorBG>
                <IconsMeaning />
            </ColorBG>
            <ChefOfTheWeek />
            <ColorBG>
                <AboutUsHomeSection />
            </ColorBG>
        </>
    )
}
