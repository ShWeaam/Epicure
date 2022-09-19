import express from 'express';
import chefsRoutes from './chefs.routes';
import dishesRoutes from './dishes.routes';
import resturantsRoutes from './resturants.routes';

const router = express.Router();

router.use('/chefs/', chefsRoutes);
router.use('/resturants/', resturantsRoutes);
router.use('/dishes/', dishesRoutes);


export default router;


