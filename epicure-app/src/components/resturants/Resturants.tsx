import ListOfItemCards from 'components/itemCardsComponents/listOfItemCards/ListOfItemCards';
import { REDUX_STATES } from 'constants/constants';

export default function Resturants() {

  return (
    <ListOfItemCards requiredState={REDUX_STATES.RESTURANTS} />
  )
}
