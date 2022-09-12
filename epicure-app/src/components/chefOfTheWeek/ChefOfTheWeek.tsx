import ShowMore from 'components/showMoreBtn/ShowMore'
import ListOfItemCards from 'components/listOfItemCards/ListOfItemCards'
import SingleChef from 'components/singleChef/SingleChef'
import { CARDS_TO_SHOW_IN_HOME, CHEF_OF_THE_WEEK_TITLE } from 'constants/constants'
import { MOBILE_TO_DESKTOP_THRESHOLD } from 'constants/styleConsts'
import SetWindowSize from 'helpers/setWindowSize'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ChefResturants, Container, ContainerTitle, Text, TextContainer } from './chefOfTheWeekStyle'


export default function ChefOfTheWeek() {

    const chef = useSelector((state: any) => state.chefs.chefOfTheWeek)
    const windowSize = SetWindowSize();
    let showMoreNeeded

    useEffect(() => {
        showMoreNeeded = () => chef.resturants.length > CARDS_TO_SHOW_IN_HOME && windowSize >= MOBILE_TO_DESKTOP_THRESHOLD
    }, []);

    return (
        <Container>
            <ContainerTitle>
                {CHEF_OF_THE_WEEK_TITLE.toUpperCase()}
            </ContainerTitle>
            <SingleChef name={chef.name} img={chef.imgUrl} />
            <TextContainer>
                <Text>
                    {chef.info}
                </Text>
            </TextContainer>
            <ChefResturants>
                <ListOfItemCards title={chef.name + "'s resturants"} requiredState={"chefOfTheWeekResturants"} />
            </ChefResturants>
            {showMoreNeeded &&
                < ShowMore linkTo={"chefs/" + chef.name} linkText={chef.name + " resturants"} />
            }

        </Container>
    )
}
