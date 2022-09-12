import SetWindowSize from 'helpers/setWindowSize'
import HeroHomePage from 'components/heroHomePage/HeroHomePage';
import { RESTURANTS_CONTAINER_TITLE, SIGNATURE_DISH_CONTAINER_TITLE } from 'constants/constants';
import ListOfItemCards from 'components/listOfItemCards/ListOfItemCards';
import ShowMore from './showMoreBtn/ShowMore';
import IconsMeaning from 'components/iconsMeaning/IconsMeaning';
import AboutUs from 'components/aboutUs/AboutUs';
import Download from 'components/downloadFromStore/Download';
import { Container, SubContainer } from './HomePageStyle';
import Logo from 'components/logo/Logo';


export default function HomePage() {
    const windowSize = SetWindowSize();

    return (
        <>
            <HeroHomePage />
            <ListOfItemCards title={RESTURANTS_CONTAINER_TITLE} requiredState={"resturants"} />
            <ShowMore linkTo={"resturants"} />
            <ListOfItemCards title={SIGNATURE_DISH_CONTAINER_TITLE} requiredState={"dishes"} />
            <ShowMore linkTo={"dishes"} />
            <IconsMeaning />
            <Container>
                <SubContainer>
                    <AboutUs />
                </SubContainer>
                <Logo />
                <Download />
            </Container>

        </>
    )
}
