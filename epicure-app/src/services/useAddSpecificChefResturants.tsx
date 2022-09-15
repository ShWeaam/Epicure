import { addResturantsForChef } from 'components/chefsComponents/chefs/chefsSlicer';
import { useDispatch, useSelector } from 'react-redux'

export default function useAddSpecificChefResturants(chefOfTheWeekName: any) {

  const chefs = useSelector((state: any) => state.chefs.value)
  const resturants = useSelector((state: any) => state.resturants.value)
  const dispatch = useDispatch();

  // @TODO => add collection "chefOfTheWeek", fetch it, get the name to here, or store in redux if needed, keep in mind I will call it for other chefs as well

  let paramToPass = {
    indexOfChef: chefs.findIndex((chef: any) => chef.name === chefOfTheWeekName),
    resturants: resturants.filter((resturant: any) => resturant.chef === chefOfTheWeekName)
  };

  dispatch(addResturantsForChef(paramToPass));

}
