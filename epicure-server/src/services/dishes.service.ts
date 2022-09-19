import DishesDal from "../dal/dishes.dal";

const DishesService = {

    getAllDishes: async () => {
        const res = await DishesDal.getAllDishes();
        return res;
    },

    // getFilteredDishes: async (query: any = null) => {
    //     const res = await DishesDal.getFilteredDishes();
    //     return res;
    // },

    getDishByName: async (dish: any) => {
        const res = await DishesDal.getDishByName(dish);
        return res;
    },

    getDishesByResturantName: async (id: any) => {
        const res = await DishesDal.getDishesByResturantName(id);
        return res;
    },

    getDishesByCategory: async (id: any) => {
        const res = await DishesDal.getDishesByCategory(id);
        return res;
    },

    createDish: async (dish: any) => {
        const res = DishesDal.createDish(dish);
        return res;
    },

    updateDish: async (dish: any) => {
        const res = await DishesDal.updateDish(dish);
        return res;
    },

    deleteDish: async (dish: any) => {
        const res = await DishesDal.deleteDish(dish);
        return res;
    },

    deleteAllDishes: async () => {
        const res = await DishesDal.deleteAllDishes();
        return res;
    },
};

export default DishesService;



