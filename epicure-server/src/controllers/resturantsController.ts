import { Request, Response } from "express";
import ResturantsService from "../services/resturants.service";

const ResturantsController = {

    getAllResturants: async (req: Request, res: Response) => {
        const restaurants = await ResturantsService.getAllResturants();
        return res.send(restaurants);
    },

    getResturant: async (req: Request, res: Response) => {
        const params = req.body;
        const restaurants = await ResturantsService.getResturant(params);
        return res.send(restaurants);
    },

    getResturantByChefName: async (req: Request, res: Response) => {
        const params = req.body;
        const restaurants = await ResturantsService.getResturantByChefName(params);
        return res.send(restaurants);
    },

    createResturant: async (req: Request, res: Response) => {
        const params = req.body;
        const restaurant = await ResturantsService.createResturant(params);
        return res.send(restaurant);
    },

    updateResturant: async (req: Request, res: Response) => {
        const params = req.body;
        const restaurant = await ResturantsService.updateResturant(params);
        return res.send(restaurant);
    },

    deleteResturant: async (req: Request, res: Response) => {
        const params = req.body;
        const restaurant = await ResturantsService.deleteResturant(params);
        return res.send(restaurant);
    },

    deleteAllResturants: async (req: Request, res: Response) => {
        const restaurant = await ResturantsService.deleteAllResturants();
        return res.send(restaurant);
    },
};

export default ResturantsController;

