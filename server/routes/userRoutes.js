import { Router } from "express";
import UserController from "../controllers/userContoller.js";

const router = Router();

router.post("/", UserController.createUser);
router.post("/login", UserController.loginUser);
router.get("/", UserController.getAllUser);
router.get("/:id", UserController.getUser);
router.put("/:id", UserController.updateUser);

export default router;
