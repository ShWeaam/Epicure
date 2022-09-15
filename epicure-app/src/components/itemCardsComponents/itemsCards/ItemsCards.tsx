import { useSelector } from 'react-redux';
import checkLegalPropsAndInRange from 'helpers/checkLegalPropsAndInRange';
import { ItemsContainer } from './itemsCardsStyle';
import SingleItemCard from 'components/itemCardsComponents/itemCard/SingleItemCard';
import { REDUX_STATES } from 'constants/constants';

interface Props {
    requiredState?: string,
    cardsToShow: string | number
}

export default function ItemsCards(props: Props) {

    const itemsList = useSelector((state: any) => {
        switch (props.requiredState) {
            case REDUX_STATES.RESTURANTS:
                return state.resturants.value;

            case REDUX_STATES.CHEF_OF_THE_WEEK_RESTURANTS:
                return state.chefs.chefOfTheWeek.resturants;

            case REDUX_STATES.DISHES:
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


