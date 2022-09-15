//const router = require('express').Router();
import express from 'express';
import DishesManager from '../managers/dishes.js';

const dishesRouter = express.Router();
dishesRouter.get(`/`, async (req, res) => {
    try {
        const dishes = await DishesManager.getAllDishes();
        return res.status(200).send(dishes);
    } catch (ex) {
        return res.status(500).send(ex.message);
    }
});

export default dishesRouter;