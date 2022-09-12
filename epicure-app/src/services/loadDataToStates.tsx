import { useDispatch, useSelector } from "react-redux";
import { addResturantsForChef, setChefs, setShouldFetchChefs } from "../components/chefs/chefsSlicer";
import { setDishes, setShouldFetchDishes } from "../components/dishes/dishesSlicer";
import { resturantsSlice, setResturants, setShouldFetchResturants } from "../components/resturants/resturantsSlicer";
import { CHEFS_URL, DATA_TO_GET_FROM_API, DISHES_URL, RESTURANTS_URL } from "../constants/constants";
import { fetchData } from "./fetchData";


export async function useFetchAndLoadDataToStates() {
    const selector = useSelector((state: any) => state)
    const dispatch = useDispatch();

    if (selector.resturants.shouldFetch) {
        const resturants = await fetchData(RESTURANTS_URL);
        dispatch(setResturants(resturants));
        dispatch(setShouldFetchResturants(false));
    }

    if (selector.chefs.shouldFetch) {
        const chefs = await fetchData(CHEFS_URL);
        dispatch(setChefs(chefs));
        dispatch(setShouldFetchChefs(false));
        
        // the following  5  lines of code are temporary workaround for a problem i`m facing
        let chefOfTheWeekName = "Asaf Granit";
        let paramToPass = {
            indexOfChef: selector.chefs.value.findIndex((chef: any) => chef.name === chefOfTheWeekName),
            resturants: selector.resturants.value.filter((resturant: any) => resturant.chef === chefOfTheWeekName)
        };
        console.log(paramToPass);
        dispatch(addResturantsForChef(paramToPass));

        // useAddSpecificChefResturants("Asaf Granit")
    }

    if (selector.dishes.shouldFetch) {
        const dishes = await fetchData(DISHES_URL);
        dispatch(setDishes(dishes));
        dispatch(setShouldFetchDishes(false));
    }
}