const router = require('express').Router();
const resturantsManager = require('../managers/resturants');

router.get(`/`, async (req, res) => {
    try {
        const resturants = await resturantsManager.getAllResturants();
        return res.status(200).send(resturants);
    } catch (ex) {
        return res.status(500).send(ex.message);
    }
});


module.exports = router;