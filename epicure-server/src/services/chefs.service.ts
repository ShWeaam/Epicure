import ChefsDal from "../dal/chefs.dal";

const ChefsService = {

    getAllChefs: async () => {
        const res = await ChefsDal.getAllChefs();
        return res;
    },

    getFilteredChefs: async (query: any = null) => {
        const res = await ChefsDal.getFilteredChefs();
        return res;
    },

    getChef: async (chef: any) => {
        const res = await ChefsDal.getChef(chef);
        return res;
    },

    getChefByID: async (id: any) => {
        const res = await ChefsDal.getChefByID(id);
        return res;
    },

    createChef: async (chef: any) => {
        const res = ChefsDal.createChef(chef);
        return res;
    },

    updateChef: async (chef: any) => {
        const res = await ChefsDal.updateChef(chef);
        return res;
    },

    deleteChef: async (chef: any) => {
        const res = await ChefsDal.deleteChef(chef);
        return res;
    },

    deleteAllChefs: async () => {
        const res = await ChefsDal.deleteAllChefs();
        return res;
    },
};

export default ChefsService;



