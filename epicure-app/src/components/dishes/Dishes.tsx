import ListOfItemCards from 'components/itemCardsComponents/listOfItemCards/ListOfItemCards';
import { REDUX_STATES } from 'constants/constants';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
export default function Dishes() {

    const dishes = useSelector((state: any) => state.dishes.value);
  
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
      <ListOfItemCards requiredState={REDUX_STATES.DISHES} />
    )
  }
  