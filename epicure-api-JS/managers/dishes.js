import Dish from '../models/dishes.js';

const DishesManager = {

    getAllDishes: async () => {
        const dishes = await Dish.find();
        return dishes;
    },

    getDishByName: async dishName => {
        const dish = await Dish.find({ name: dishName });
        return dish ? dish : false;
    },

    getDishesByResturantName: async resturantName => {
        const dishes = await Dish.find({ resturant: resturantName });
        return dishes;
    },

    getDishesByCategory: async dishCategory => {
        const dishes = await Dish.find({ category: dishCategory });
        return dishes;
    },

    create: async temp => {
        let dish = new Dish({ ...temp });
        dish = await dish.save();
        return dish ? dish : false;
    },

    delete: async id => {
        let res = await Dish.findByIdAndDelete(id);
        return res ? true : false;
    },

    deleteAll: async () => {
        let res = await Dish.deleteMany({});
        return res ? true : false;
    }
};

export default DishesManager;