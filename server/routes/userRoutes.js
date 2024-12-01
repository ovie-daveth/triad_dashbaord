import { Router } from "express";
import UserController from "../controllers/userContoller.js";
import authMiddleware from "../utils/authMiddleware.js";

const router = Router();

router.post("/", UserController.createUser);
router.post("/login", UserController.loginUser);
router.get("/", authMiddleware,  UserController.getAllUser);
router.get("/profile", authMiddleware, UserController.getUser);
router.put("/:id", authMiddleware, UserController.updateUser);

export default router;
