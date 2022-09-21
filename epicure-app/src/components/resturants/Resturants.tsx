import ListOfItemCards from 'components/itemCardsComponents/listOfItemCards/ListOfItemCards';
import { REDUX_STATES } from 'constants/constants';
import { useEffect } from 'react';

export default function Resturants() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ListOfItemCards requiredState={REDUX_STATES.RESTURANTS} />
  )
}
