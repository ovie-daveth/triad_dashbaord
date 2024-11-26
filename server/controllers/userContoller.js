import { registerUser, findAll,  findById, UpdateUser } from "../models/userModel.js";
import response from "../views/response.js";

const UserController = {
  // Create a post
  createUser: async (req, res) => {
    try {
      const newUser = await registerUser(req.body);

      return response.success(res, "newUser created successfully", newUser);
    } catch (error) {
      console.error(error);
      return response.error(res, "Failed to create newUser");
    }
  },

  // Get all posts
  getAllUser: async (req, res) => {
    try {
      const user = await findAll();
      return response.success(res, "User fetched successfully", user);
    } catch (error) {
      console.error(error);
      return response.error(res, "Failed to fetch user");
    }
  },

  
  // Get all posts
  getUser: async (req, res) => {
    try {
      const user = await findById(req.params.id);
      return response.success(res, "User fetched successfully", user);
    } catch (error) {
      console.error(error);
      return response.error(res, "Failed to fetch user");
    }
  },


  // Update a post
  updateUser: async (req, res) => {
    try {
      const updatedUser = await UpdateUser(req.params.id, req.body);
      return response.success(res, "Post updated successfully", updatedUser);
    } catch (error) {
      console.error(error);
      return response.error(res, "Failed to update user");
    }
  },
};

export default UserController;
