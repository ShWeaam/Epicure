import ResturantsDal from "../dal/resturants.dal";

const ResturantsService = {

    getAllResturants: async () => {
        const res = await ResturantsDal.getAllResturants();
        return res;
    },

    getResturant: async (restaurant: any) => {
        const res = await ResturantsDal.getResturant(restaurant);
        return res;
    },

    getResturantByChefName: async (chefName: any) => {
        const res = await ResturantsDal.getResturant(chefName);
        return res;
    },

    createResturant: async (restaurant: any) => {
        const res = ResturantsDal.createResturant(restaurant);
        return res;
    },

    updateResturant: async (restaurant: any) => {
        const res = await ResturantsDal.updateResturant(restaurant);
        return res;
    },

    deleteResturant: async (restaurant: any) => {
        const res = await ResturantsDal.deleteResturant(restaurant);
        return res;
    },

    deleteAllResturants: async () => {
        const res = await ResturantsDal.deleteAllResturants();
        return res;
    },
};

export default ResturantsService;


