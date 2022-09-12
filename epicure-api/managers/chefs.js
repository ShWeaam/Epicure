const Chef = require('../models/chefs');

const Manager = {

    getAllChefs: async () => {
        const chefs = await Chef.find();
        return chefs;
    },

    getChefByName: async chefName => {
        const chef = await Chef.find({ name: chefName });
        return chef ? chef : false;
    },

    create: async temp => {
        let chef = new Chef({ ...temp });
        chef = await chef.save();
        return chef ? chef : false;
    },

    delete: async id => {
        let res = await Chef.findByIdAndDelete(id);
        return res ? true : false;
    },

    deleteAll: async () => {
        let res = await Chef.deleteMany({});
        return res ? true : false;
    }
};

module.exports = Manager;