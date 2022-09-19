import { Router } from "express";
import DishesController from "../controllers/dishesController";

const router = Router();

router.get("/getAllDishes", DishesController.getAllDishes);
// router.get("/getFilteredDishes", DishesController.getFilteredDishes);
router.get("/getDishByName", DishesController.getDishByName);
router.get("/getDishesByResturantName", DishesController.getDishesByResturantName);
router.get("/getDishesByCategory", DishesController.getDishesByCategory);
router.post("/createDish", DishesController.createDish);
router.put("/updateDish", DishesController.updateDish);
router.delete("/deleteDish", DishesController.deleteDish);
router.delete("/deleteDishes", DishesController.deleteAllDishes);

export default router;


