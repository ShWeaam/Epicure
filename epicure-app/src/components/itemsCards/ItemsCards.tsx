import { useSelector } from 'react-redux';
import checkLegalPropsAndInRange from 'helpers/checkLegalPropsAndInRange';
import { ItemsContainer } from './itemsCardsStyle';
import SingleItemCard from 'components/itemCard/SingleItemCard';

interface Props {
    requiredState?: string,
    cardsToShow: string | number
}

export default function ItemsCards(props: Props) {

    const itemsList = useSelector((state: any) => {
        switch (props.requiredState) {
            case "resturants":
                return state.resturants.value;
            case "chefOfTheWeekResturants":
                return state.chefs.chefOfTheWeek.resturants;
            case "dishes":
                return state.dishes.value;
            default:
                return undefined
        }
    });

    return (
        <ItemsContainer>
            {itemsList && itemsList.map((item: any, index: number) => (
                checkLegalPropsAndInRange(props.cardsToShow, index)
                &&
                <SingleItemCard item={item} type={props.requiredState} key={index} />
            ))}
        </ItemsContainer>
    )
}


