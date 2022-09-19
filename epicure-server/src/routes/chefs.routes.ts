import { Router } from "express";
import ChefsController from "../controllers/chefsController";

const router = Router();

router.get("/getAllChefs", ChefsController.getAllChefs);
router.get("/getFilteredChefs", ChefsController.getFilteredChefs);
router.get("/getChef", ChefsController.getChef);
router.get("/getChefByID", ChefsController.getChefByID);
router.post("/createChef", ChefsController.createChef);
router.put("/updateChef", ChefsController.updateChef);
router.delete("/deleteChef", ChefsController.deleteChef);
router.delete("/deleteChefs", ChefsController.deleteAllChefs);

export default router;


