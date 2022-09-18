import { Router } from "express";
import ResturantsController from "../controllers/resturantsController";

const router = Router();

router.get("/getAllResturants", ResturantsController.getAllResturants);
router.get("/getResturant", ResturantsController.getResturant);
router.get("/getChefResturants", ResturantsController.getResturantByChefName);
router.post("/createResturant", ResturantsController.createResturant);
router.put("/updateResturant", ResturantsController.updateResturant);
router.delete("/deleteResturant", ResturantsController.deleteResturant);
router.delete("/deleteResturants", ResturantsController.deleteAllResturants);

export default router;


