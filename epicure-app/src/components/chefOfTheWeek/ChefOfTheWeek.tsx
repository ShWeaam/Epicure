import ShowMore from 'components/homePage/showMoreBtn/ShowMore'
import ListOfItemCards from 'components/listOfItemCards/ListOfItemCards'
import SingleChef from 'components/singleChef/SingleChef'
import { CHEF_OF_THE_WEEK_TITLE } from 'constants/constants'
import React from 'react'
import { useSelector } from 'react-redux'
import { ChefResturants, Container, ContainerTitle, Text, TextContainer } from './chefOfTheWeekStyle'

interface Props {

}

export default function ChefOfTheWeek(props: any) {

    const chef = useSelector((state: any) => state.chefs.chefOfTheWeek)

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
            <ShowMore linkTo={"chefs/" + chef.name} linkText={chef.name+" resturants"} />


        </Container>
    )
}
