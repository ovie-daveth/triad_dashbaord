import { Router } from "express";
import PostController from "../controllers/postController.js";

const router = Router();

router.post("/", PostController.createPost);
router.get("/", PostController.getAllPosts);
router.get("/:id", PostController.getPost);
router.get("/user/:id", PostController.getPostByUserId);
router.put("/:id", PostController.updatePost);
router.delete("/:id", PostController.deletePost);

export default router;
