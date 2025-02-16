import { PrismaClient } from "@prisma/client";
import { registerUser, findAll,  findById, UpdateUser } from "../models/userModel.js";
import response from "../views/response.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 
import { verifyPassword } from "../utils/comparePassowrd.js";


const prisma = new PrismaClient();

const UserController = {
  // Create a post
  createUser: async (req, res) => {
    try {

      const { password, ...userData } = req.body; 

      // Encrypt the password
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds

      // Create the user with the hashed password
      const newUser = await registerUser({ ...userData, password: hashedPassword });


      return response.success(res, "newUser created successfully", newUser);
    } catch (error) {
      console.error(error);
      return response.error(res, "Failed to create newUser");
    }
  },
  

  loginUser: async (req, res) => {
    try {


      const reqUser = req.body;
      const user = await prisma.user.findUnique({
        where: { email: reqUser?.email }
      });

      if (!user) {
        return response.error(res, "User not found");
      }

      const isPasswordTrue = await verifyPassword(reqUser.password, user.password);

      if(!isPasswordTrue){
        return response.error(res, "Invalid credentials");
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },  // Payload: user id and email
        process.env.JWT_SECRET,               // Secret key for signing the token
        { expiresIn: "24h" }                  // Token expiration time (e.g., 1 hour)
      );

      return response.success(res, "You're in, welcome", {user, token});
    } catch (error) {
      console.error(error);
      return response.error(res, "Failed to log in user");
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
      const user = await findById(req.user.id);
      const renderedUser = {
        id: user.id,
        email: user.email,
        name: user.name,
        postCount: user.postCount
      }
      return response.success(res, "User fetched successfully", renderedUser);
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
