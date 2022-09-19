import { ObjectId } from "mongoose";
import Dish from "../db/models/dishes";

const DishesDal = {

  getAllDishes: async () => {
    const dishes = await Dish.find();
    return dishes;
  },

  // getFilteredDishes: async (query: any = null) => {
  //   const dishes = Dish.find(query);
  //   return dishes;
  // },

  getDishByName: async (dishName: any) => {
    const dish = await Dish.find({ name: dishName });
    return dish ? dish : false;
  },

  getDishesByResturantName: async (resturantName: any) => {
    const dishes = await Dish.find({ resturant: resturantName });
    return dishes;
  },

  getDishesByCategory: async (dishCategory: any) => {
    const dishes = await Dish.find({ category: dishCategory });
    return dishes;
  },

  createDish: async (dish: any) => {
    dish = new Dish({
      name: dish.name,
      price: dish.price,
      category: dish.category,
      resturant: dish.resturant,
      mealType: dish.mealType,
      ingredients: dish.ingredients,
      sides: dish.sides,
      changes: dish.changes,
      imgUrl: dish.imgUrl,
      isSignatureDish: dish.isSignatureDish,
    });

    dish.save(function (err: any, results: any) {
      return results;
    });
  },

  updateDish: async (dish: any) => {
    const data = await Dish.findOne({
      name: dish.name,
    }).updateOne({
      $set: {
        name: dish.name,
        price: dish.price,
        category: dish.category,
        resturant: dish.resturant,
        mealType: dish.mealType,
        ingredients: dish.ingredients,
        sides: dish.sides,
        changes: dish.changes,
        imgUrl: dish.imgUrl,
        isSignatureDish: dish.isSignatureDish,
      },
    })
    return data
  },

  deleteDish: async (id: ObjectId) => {
    const deletedDish = await Dish.findByIdAndDelete(id);
    return deletedDish;
  },

  deleteAllDishes: async () => {
    const res = await Dish.deleteMany({});
    return res;
  }
};

export default DishesDal;


