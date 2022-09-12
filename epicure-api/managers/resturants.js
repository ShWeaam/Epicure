const Resturant = require('../models/resturants')

const Manager = {

    getAllResturants: async () => {
        const resturants = await Resturant.find();
        return resturants;
    },

    getResturantByName: async resturantName => {
        const resturant = await Resturant.find({ name: resturantName });
        return resturant ? resturant : false;
    },

    getResturantsByChefName: async chefName => {
        const resturants = await Resturant.find({ chef: chefName });
        return resturants;
    },

    create: async temp => {
        let resturant = new Resturant({ ...temp });
        resturant = await resturant.save();
        return resturant ? resturant : false;
    },

    delete: async id => {
        let res = await Resturant.findByIdAndDelete(id);
        return res ? true : false;
    },

    deleteAll: async () => {
        let res = await Resturant.deleteMany({});
        return res ? true : false;
    }
};

module.exports = Manager;