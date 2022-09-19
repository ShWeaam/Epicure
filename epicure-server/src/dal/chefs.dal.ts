import { ObjectId } from "mongoose";
import Chef from "../db/models/chefs";

const ChefsDal = {

  getAllChefs: async () => {
    const chefs = await Chef.find();
    return chefs;
  },

  getFilteredChefs: async (query: any = null) => {
    const chef = await Chef.find(query);
    return chef ? chef : false;
  },

  getChef: async (chefName: any) => {
    const chef = await Chef.find({ name: chefName });
    return chef ? chef : false;
  },

  getChefByID: async (chefId: any) => {
    const chef = await Chef.find({ _id: chefId });
    return chef ? chef : false;
  },

  createChef: async (chef: any) => {
    chef = new Chef({
      name: chef.name,
      imgUrl: chef.imgUrl,
    });

    chef.save(function (err: any, results: any) {
      return results;
    });
  },

  updateChef: async (chef: any) => {
    const data = await Chef.findOne({
      name: chef.name,
    }).updateOne({
      $set: {
        name: chef.name,
        imgUrl: chef.imgUrl,
      },
    })
    return data
  },

  deleteChef: async (id: ObjectId) => {
    const deletedChef = await Chef.findByIdAndDelete(id);
    return deletedChef;
  },

  deleteAllChefs: async () => {
    const res = await Chef.deleteMany({});
    return res;
  }
};

export default ChefsDal;


