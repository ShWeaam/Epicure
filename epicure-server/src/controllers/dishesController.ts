import { Request, Response } from "express";
import DishesService from "../services/dishes.service";

const DishesController = {

    getAllDishes: async (req: Request, res: Response) => {
        const dishes = await DishesService.getAllDishes();
        return res.send(dishes);
    },

    // getFilteredDishes: async (req: Request, res: Response) => {
    //     const params = req.body;
    //     const filteredDishes = await DishesService.getFilteredDishes(params);
    //     return res.send(filteredDishes);
    // },

    getDishByName: async (req: Request, res: Response) => {
        const params = req.body;
        const dish = await DishesService.getDishByName(params);
        return res.send(dish);
    },

    getDishesByResturantName: async (req: Request, res: Response) => {
        const params = req.body;
        const dish = await DishesService.getDishesByResturantName(params);
        return res.send(dish);
    },

    getDishesByCategory: async (req: Request, res: Response) => {
        const params = req.body;
        const dish = await DishesService.getDishesByCategory(params);
        return res.send(dish);
    },

    createDish: async (req: Request, res: Response) => {
        const params = req.body;
        const dish = await DishesService.createDish(params);
        return res.send(dish);
    },

    updateDish: async (req: Request, res: Response) => {
        const params = req.body;
        const dish = await DishesService.updateDish(params);
        return res.send(dish);
    },
    deleteDish: async (req: Request, res: Response) => {
        const params = req.body;
        const deletedDish = await DishesService.deleteDish(params);
        return res.send(deletedDish);
    },
    deleteAllDishes: async (req: Request, res: Response) => {
        const deleteionRes = await DishesService.deleteAllDishes();
        return res.send(deleteionRes);
    },

};

export default DishesController;
