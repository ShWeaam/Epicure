const router = require('express').Router();
const dishesManager = require('../managers/dishes');

router.get(`/`, async (req, res) => {
    try {
        const dishes = await dishesManager.getAllDishes();
        return res.status(200).send(dishes);
    } catch (ex) {
        return res.status(500).send(ex.message);
    }
});

module.exports = router;