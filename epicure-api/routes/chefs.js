//const router = require('express').Router();
import express from 'express';
import chefsManager from '../managers/chefs.js';

const chefsRouter = express.Router();

chefsRouter.get(`/`, async (req, res) => {
    try {
        const chefs = await chefsManager.getAllChefs();
        return res.status(200).send(chefs);
    } catch (ex) {
        return res.status(500).send(ex.message);
    }
});

// module.exports = Router;
export default chefsRouter;