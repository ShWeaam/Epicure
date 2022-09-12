const router = require('express').Router();
const chefsManager = require('../managers/chefs');

router.get(`/`, async (req, res) => {
    try {
        const chefs = await chefsManager.getAllChefs();
        return res.status(200).send(chefs);
    } catch (ex) {
        return res.status(500).send(ex.message);
    }
});


module.exports = router;