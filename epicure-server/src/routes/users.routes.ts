import { Router } from "express";
import UsersController from "../controllers/usersController";

const router = Router();

router.get("/getAllUsers", UsersController.getAllUsers);
router.get("/getUser", UsersController.getUser);
router.post("/signUp", UsersController.createUser);
router.put("/updateUser", UsersController.updateUser);
router.put("/updatePassword", UsersController.updatePassword);
router.delete("/deleteUser", UsersController.deleteUser);
// router.delete("/deleteUsers", UsersController.deleteAllUsers);

export default router;


