import { useDispatch, useSelector } from "react-redux";
import { addResturantsForChef, setChefOfTheWeek, setChefs, setShouldFetchChefs } from "../components/chefsComponents/chefs/chefsSlicer";
import { setDishes, setShouldFetchDishes } from "../components/dishes/dishesSlicer";
import { resturantsSlice, setResturants, setShouldFetchResturants } from "../components/resturants/resturantsSlicer";
import { API_MAIN_ROUTES as API, CHEFS_API, DATA_TO_GET_FROM_API, DISHES_API, RESTURANTS_API, } from "../constants/apiRoutes";
import { fetchData } from "./fetchData";
import _ from "lodash";


export async function useFetchAndLoadDataToStates() {
    const selector = useSelector((state: any) => state)
    const dispatch = useDispatch();

    if (selector.resturants.shouldFetch) {
        const resturants = await fetchData(API.RESTURANTS + RESTURANTS_API.GET_ALL_RESTURANTS);
        console.log(API.RESTURANTS + RESTURANTS_API.GET_ALL_RESTURANTS)
        dispatch(setResturants(resturants));
        dispatch(setShouldFetchResturants(false));
    }

    if (selector.chefs.shouldFetch) {
        const chefs = await fetchData(API.CHEFS + CHEFS_API.GET_ALL_CHEFS);
        // the following  10  lines of code are temporary workaround for a problem i`m facing
        let tempChefs = [{}];
        let chefOfTheWeekName = "Asaf Granit";
        if (chefs)
            tempChefs = chefs;
        let indexOfChef = tempChefs.findIndex((chef: any) => chef.name === chefOfTheWeekName);
        let resturants = selector.resturants.value.filter((resturant: any) => resturant.chef === chefOfTheWeekName);
        tempChefs[indexOfChef] = _.merge(tempChefs[indexOfChef], { resturants });

        dispatch(setChefs(tempChefs));
        dispatch(setChefOfTheWeek(tempChefs[indexOfChef]));
        dispatch(setShouldFetchChefs(false));

        // useAddSpecificChefResturants("Asaf Granit")

    }
    if (selector.dishes.shouldFetch) {
        const dishes = await fetchData(API.DISHES + DISHES_API.GET_ALL_DISHES);
        dispatch(setDishes(dishes));
        dispatch(setShouldFetchDishes(false));
    }
}