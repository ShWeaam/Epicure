import { Request, Response } from "express";
import ChefsService from "../services/chefs.service";

const ChefsController = {

    getAllChefs: async (req: Request, res: Response) => {
        const chefs = await ChefsService.getAllChefs();
        return res.send(chefs);
    },

    getFilteredChefs: async (req: Request, res: Response) => {
        const params = req.body;
        const filteredChefs = await ChefsService.getFilteredChefs(params);
        return res.send(filteredChefs);
    },

    getChef: async (req: Request, res: Response) => {
        const params = req.body;
        const chef = await ChefsService.getChef(params);
        return res.send(chef);
    },

    getChefByID: async (req: Request, res: Response) => {
        const params = req.body;
        const chef = await ChefsService.getChefByID(params);
        return res.send(chef);
    },

    createChef: async (req: Request, res: Response) => {
        const params = req.body;
        const chef = await ChefsService.createChef(params);
        return res.send(chef);
    },

    updateChef: async (req: Request, res: Response) => {
        const params = req.body;
        const chef = await ChefsService.updateChef(params);
        return res.send(chef);
    },
    deleteChef: async (req: Request, res: Response) => {
        const params = req.body;
        const deletedChef = await ChefsService.deleteChef(params);
        return res.send(deletedChef);
    },
    deleteAllChefs: async (req: Request, res: Response) => {
        const deleteionRes = await ChefsService.deleteAllChefs();
        return res.send(deleteionRes);
    },

};

export default ChefsController;
