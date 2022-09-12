import ListOfItemCards from 'components/listOfItemCards/ListOfItemCards'
import React from 'react'
import { useSelector } from 'react-redux'

export default function ChefResturants() {
    const chef = useSelector((state: any) => state.chefs.chefOfTheWeek);

    return (
        <ListOfItemCards title={chef.name + "'s resturants"} requiredState={"chefOfTheWeekResturants"} />
    )
}
