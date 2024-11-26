const express = require("express");
const PostController = require("../controllers/post.controller");

const router = express.Router();

router.post("/", PostController.createPost);
router.get("/", PostController.getAllPosts);
router.put("/:id", PostController.updatePost);
router.delete("/:id", PostController.deletePost);

module.exports = router;
