import { createPost, findAllPosts, updatePost, deletePost, findOnePost } from "../models/postModels.js";
import { updatePostCount } from "../models/userModel.js";
import response from "../views/response.js";

const PostController = {
  // Create a post
  createPost: async (req, res) => {
    try {
      const newPost = await createPost(req.body);

      // Update user's post count
      await updatePostCount(req.body.userId);

      return response.success(res, "Post created successfully", newPost);
    } catch (error) {
      console.error(error);
      return response.error(res, "Failed to create post");
    }
  },

  // Get all posts
  getAllPosts: async (req, res) => {
    try {
      const posts = await findAllPosts();
      return response.success(res, "Posts fetched successfully", posts);
    } catch (error) {
      console.error(error);
      return response.error(res, "Failed to fetch posts");
    }
  },


    // Get all posts
    getPost: async (req, res) => {
      try {
        const post = await findOnePost(req.params.id);
        return response.success(res, "post fetched successfully", post);
      } catch (error) {
        console.error(error);
        return response.error(res, "Failed to fetch user");
      }
    },


  // Update a post
  updatePost: async (req, res) => {
    try {
      const updatedPost = await updatePost(req.params.id, req.body);
      return response.success(res, "Post updated successfully", updatedPost);
    } catch (error) {
      console.error(error);
      return response.error(res, "Failed to update post");
    }
  },

  // Delete a post
  deletePost: async (req, res) => {
    try {
      const deletedPost = await deletePost(req.params.id);

      // Decrement user's post count
      await updatePostCount(deletedPost.userId, -1);

      return response.success(res, "Post deleted successfully", deletedPost);
    } catch (error) {
      console.error(error);
      return response.error(res, "Failed to delete post");
    }
  },
};

export default PostController;
