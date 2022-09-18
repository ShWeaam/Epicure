import { ObjectId } from "mongoose";
import Resturant from "../db/models/resturants";

const ResturantsDal = {

  getAllResturants: async () => {
    return await Resturant.find();
  },

  getResturant: async (resturantName: string) => {
    const resturant = await Resturant.find({ name: resturantName });
    return resturant ? resturant : false;
  },

  getResturantsByChefName: async (chefName: string) => {
    const resturants = await Resturant.find({ chef: chefName });
    return resturants;
  },

  createResturant: async (resturant: any) => {
    // resturant = new Resturant({ ...resturant }),
    resturant = new Resturant({
      name: resturant.name,
      chef: resturant.chef,
      rating: resturant.rating ? resturant.rating : 1,
      openTime: resturant.openTime,
      closeTime: resturant.closeTime,
      imgUrl: resturant.imgUrl,
      orders: resturant.orders,
    }),
      resturant.save(function (err: any, results: any) {
        return results;
      });
  },

  updateResturant: async (resturant: any) => {
    await Resturant.findOne({
      name: resturant.name,
    }).updateOne({
      $set: {
        chef: resturant.chef,
        imgUrl: resturant.imgUrl,
      }
    });
    const updatedResturants = await Resturant.find();
    return updatedResturants;
  },

  deleteResturant: async (id: ObjectId) => {
    const res = await Resturant.findByIdAndDelete(id);
    return res;
  },

  deleteAllResturants: async () => {
    const res = await Resturant.deleteMany({});
    return res;
  }
};

export default ResturantsDal;


