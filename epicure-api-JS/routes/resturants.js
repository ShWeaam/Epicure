//const router = require('express').Router();
//const resturantsManager = require('../managers/resturants').default;
import express from 'express';
import ResturantManager from '../managers/resturants.js';

const resturantsRouter = express.Router();

resturantsRouter.get(`/`, async (req, res) => {
    try {
        const resturants = await ResturantManager.getAllResturants();
        return res.status(200).send(resturants);
    } catch (ex) {
        return res.status(500).send(ex.message);
    }
});


export default resturantsRouter;