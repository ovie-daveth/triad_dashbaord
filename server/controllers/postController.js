const PostModel = require("../models/post.model");
const UserModel = require("../models/user.model");
const response = require("../views/response");

const PostController = {
  // Create a post
  createPost: async (req, res) => {
    try {
      const newPost = await PostModel.create(req.body);

      // Update user's post count
      await UserModel.updatePostCount(req.body.userId);

      return response.success(res, "Post created successfully", newPost);
    } catch (error) {
      console.error(error);
      return response.error(res, "Failed to create post");
    }
  },

  // Get all posts
  getAllPosts: async (req, res) => {
    try {
      const posts = await PostModel.findAll();
      return response.success(res, "Posts fetched successfully", posts);
    } catch (error) {
      console.error(error);
      return response.error(res, "Failed to fetch posts");
    }
  },

  // Update a post
  updatePost: async (req, res) => {
    try {
      const updatedPost = await PostModel.update(req.params.id, req.body);
      return response.success(res, "Post updated successfully", updatedPost);
    } catch (error) {
      console.error(error);
      return response.error(res, "Failed to update post");
    }
  },

  // Delete a post
  deletePost: async (req, res) => {
    try {
      const deletedPost = await PostModel.delete(req.params.id);

      // Decrement user's post count
      await UserModel.updatePostCount(deletedPost.userId, -1);

      return response.success(res, "Post deleted successfully", deletedPost);
    } catch (error) {
      console.error(error);
      return response.error(res, "Failed to delete post");
    }
  },
};

module.exports = PostController;
