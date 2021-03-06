import { Router } from "express";
import UserController from "../controller/UserController";
import {checkJwt} from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRoles";

const router = Router();

router.get("/",[checkJwt, checkRole(["ADMIN"])], UserController.listAll);

router.get("/:id([0-9]+)",[checkJwt, checkRole(["ADMIN"])], UserController.getOneById);
//Create a new user
router.post("/", [checkJwt, checkRole(["ADMIN"])], UserController.newUser);

//Edit one user
router.patch("/:id([0-9]+)",[checkJwt, checkRole(["ADMIN"])], UserController.editUser);

//Delete one user
router.delete("/:id([0-9]+)",[checkJwt, checkRole(["ADMIN"])], UserController.deleteUser);

export default router;