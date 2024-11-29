import { Router } from "express";
import PostController from "../controllers/postController.js";
import authMiddleware from "../utils/authMiddleware.js";

const router = Router();

router.post("/", authMiddleware, PostController.createPost);
router.get("/", authMiddleware, PostController.getAllPosts);
router.get("/:id", authMiddleware, PostController.getPost);
router.get("/user/:id", authMiddleware, PostController.getPostByUserId);
router.put("/:id", authMiddleware, PostController.updatePost);
router.delete("/:id", authMiddleware, PostController.deletePost);

export default router;
